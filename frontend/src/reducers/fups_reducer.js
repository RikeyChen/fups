import {RECEIVE_FUPS, RECEIVE_USER_FUPS, RECEIVE_NEW_FUP, REMOVE_USER_FUPS} from '../actions/fups_actions';

const FupsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FUPS:
      return action.fups;
    case RECEIVE_USER_FUPS:
      return action.fups;
    case RECEIVE_NEW_FUP:
      const newState = []
      newState.push(action.fup)
      state.forEach(el => newState.push(el))
      return newState
    default:
      return state;
  }
}

export default FupsReducer;