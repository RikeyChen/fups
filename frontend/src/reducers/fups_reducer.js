import {RECEIVE_FUPS, RECEIVE_USER_FUPS, RECEIVE_NEW_FUP} from '../actions/fups_actions';

const FupsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FUPS:
      return action.fups;
    case RECEIVE_USER_FUPS:
      return action.fups;
    case RECEIVE_NEW_FUP:
      return Object.assign({}, state, {[action.fup.id]: action.fup})
    default:
      return state;
  }
}

export default FupsReducer;