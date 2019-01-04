import { combineReducers } from 'redux';
import fups from './fups_reducer';
import words from './words_reducer';

const EntitiesReducer = combineReducers({
  fups,
  words
});

export default EntitiesReducer;