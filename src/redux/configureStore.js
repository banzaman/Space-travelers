import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rockets from './rockets/Rockets';
import missions from './missions/Missions';

const reducer = combineReducers({
  rockets,
  missions,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
