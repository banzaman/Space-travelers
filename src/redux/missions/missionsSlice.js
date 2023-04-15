import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: true,
  error: null,
};

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    MemberShip: (state, action) => {
      const newState = state.missions.forEach((element) => {
        if (element.mission_id === action.payload) {
          element.reserved = !element.reserved;
        }
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = [];
        action.payload.forEach((element) => {
          const item = {};
          item.name = element.mission_name;
          item.mission_id = element.mission_id;
          item.description = element.description;
          item.reserved = false;
          data.push(item);
        });
        state.missions = data;
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { MemberShip } = missionsSlice.actions;
export default missionsSlice.reducer;
