import { combineReducers } from 'redux';
import fups from './fups_reducer';
import words from './words_reducer';
import dataFups from './data_fups_reducer';

const EntitiesReducer = combineReducers({
  fups,
  dataFups,
  words
});

export default EntitiesReducer;