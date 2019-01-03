import { combineReducers } from 'redux';
import fups from './fups_reducer';

const RootReducer = combineReducers({
  fups,
});

export default RootReducer;