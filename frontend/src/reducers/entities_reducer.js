import { combineReducers } from 'redux';
import fups from './fups_reducer';
import topFups from './top_fups_reducer';
import words from './words_reducer';
import dataFups from './data_fups_reducer';

const EntitiesReducer = combineReducers({
  fups,
  topFups,
  dataFups,
  words
});

export default EntitiesReducer;