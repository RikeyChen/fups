import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import FupErrorsReducer from './fup_errors_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  fup: FupErrorsReducer
});