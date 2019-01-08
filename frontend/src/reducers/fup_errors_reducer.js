import {RECEIVE_FUP_ERROR, RECEIVE_NEW_FUP} from "../actions/fups_actions"

const _nullErrors = [];

const FupErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FUP_ERROR:
      return action.errors;
    case RECEIVE_NEW_FUP:
      return _nullErrors;
    default:
      return state;
  }
}

export default FupErrorsReducer;

