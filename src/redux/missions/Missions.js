import fetchMission from './api';

const GET_MISSION = 'MISSIONS_DISPLAYED';

const initialState = [];

export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MISSION: return action.payload;
    default: return state;
  }
}

export const showMissions = () => async (dispatch) => {
  let missions;
  try {
    missions = await fetchMission();
    dispatch({
      type: GET_MISSION,
      payload: missions,
    });
  } catch (err) {
    return err;
  }
  return missions;
};
