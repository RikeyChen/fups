import { combineReducers } from 'redux';
import fups from './fups_reducer';

const EntitiesReducer = combineReducers({
  fups,
});

export default EntitiesReducer;