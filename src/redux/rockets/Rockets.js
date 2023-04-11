import fetchRockets from './api';

const FETCHROCKETS = 'FETCHROCKETS';
const initialState = [];

export const getRockets = () => async (dispatch) => {
  const newState = await fetchRockets();
  dispatch({
    type: FETCHROCKETS,
    newState,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHROCKETS:
      return action.newState;
    default:
      return state;
  }
};

export default reducer;
