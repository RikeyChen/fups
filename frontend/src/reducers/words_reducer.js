import { RECEIVE_USER_WORDS } from '../actions/words_actions';

const WordsReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_WORDS:
      return action.words
    default:
      return state
  }
}

export default WordsReducer;