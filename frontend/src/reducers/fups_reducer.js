import { RECEIVE_FUPS, RECEIVE_USER_FUPS, RECEIVE_NEW_FUP, CLEAR_FUPS, RECEIVE_LIKE, REMOVE_LIKE} from '../actions/fups_actions';

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
    case RECEIVE_LIKE:
      let fupIdx;
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === action.like.fup) {
          fupIdx = i
        }
      }
      newState = state.slice();
      newState[fupIdx].likes.push(action.like)
      return newState;
    case REMOVE_LIKE:
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

export default FupsReducer;