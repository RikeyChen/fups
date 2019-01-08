import { RECEIVE_TOP_FUPS, RECEIVE_TOP_LIKE, REMOVE_TOP_LIKE } from '../actions/fups_actions';

const TopFupsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOP_FUPS:
      let newState = state.slice();
      action.fups.forEach(fup => newState.push(fup));
      return newState;
    case RECEIVE_TOP_LIKE:
      let fupIdx;
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === action.like.fup) {
          fupIdx = i
        }
      }
      newState = state.slice();
      newState[fupIdx].likes.push(action.like)
      return newState;
    case REMOVE_TOP_LIKE:
      newState = state.slice();
      let fup = newState.find(fup => fup._id === action.payload.fup._id);
      fupIdx = newState.indexOf(fup);
      let like = newState[fupIdx].likes.find(like => like._id === action.payload.like._id);
      const likeIdx = newState.indexOf(like);
      newState[fupIdx].likes.splice(likeIdx, 1);
      return newState;
    default:
      return state;
  }
};

export default TopFupsReducer;