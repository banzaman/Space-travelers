import {
    applyMiddleware, compose, legacy_createStore as createStore, combineReducers,
  } from 'redux';

  import thunk from 'redux-thunk';

  import missionsReducer from './missions/Missions';

  const rootReducer = combineReducers({
    missions: missionsReducer,
  });

  const initialState = {};

  const middleware = [thunk];

  export default () => {
    const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
    return {
      store,
    };
  };
  