import {RECEIVE_FUPS, RECEIVE_USER_FUPS, RECEIVE_NEW_FUP, CLEAR_FUPS, LIKE_FUP} from '../actions/fups_actions';

const FupsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_FUPS:
      newState = state.slice();
      return newState.concat(action.fups);
    case RECEIVE_USER_FUPS:
      newState = state.slice();
      return newState.concat(action.fups);
    case RECEIVE_NEW_FUP:
      newState = [];
      newState.push(action.fup);
      state.forEach(el => newState.push(el));
      return newState;
    case CLEAR_FUPS:
      return [];
    case LIKE_FUP:
      newState = [];
      newState.push(action.like);
      state.forEach(el => newState.push(el));
      return newState;
    default:
      return state;
  }
};

export default FupsReducer;