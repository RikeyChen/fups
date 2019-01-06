import {RECEIVE_FUPS, RECEIVE_USER_FUPS, RECEIVE_NEW_FUP, CLEAR_FUPS} from '../actions/fups_actions';

const FupsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FUPS:
      let newState = state.slice();
      return newState.concat(action.fups);
    case RECEIVE_USER_FUPS:
      return action.fups;
    case RECEIVE_NEW_FUP:
      newState = [];
      newState.push(action.fup);
      state.forEach(el => newState.push(el));
      return newState;
    case CLEAR_FUPS:
      return [];
    default:
      return state;
  }
};

export default FupsReducer;