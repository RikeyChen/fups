import {RECEIVE_FUPS, RECEIVE_USER_FUPS, RECEIVE_NEW_FUP, CLEAR_FUPS, RECEIVE_LIKE} from '../actions/fups_actions';

const FupsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_FUPS:
      debugger;
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
    case RECEIVE_LIKE:
      let fupIdx;
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === action.like.fup) {
          fupIdx = i
        }
      }
      newState = [];
      state.forEach(el => newState.push(el));
      newState[fupIdx].likes.push(action.like)
      return newState;
    default:
      return state;
  }
};

export default FupsReducer;