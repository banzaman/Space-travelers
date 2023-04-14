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
      const newState = state.missions.forEach((mission) => {
        if (mission.mission_id === action.payload) {
          mission.reserved = !mission.reserved;
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
        state.missions = action.payload;
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { MemberShip } = missionsSlice.actions;
export default missionsSlice.reducer;
