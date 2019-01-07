import { RECEIVE_USER_WORDS, CLEAR_WORDS } from '../actions/words_actions';

const WordsReducer = ( state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_WORDS:
      return action.words.data;
    case CLEAR_WORDS:
      return [];
    default:
      return state;
  }
}

export default WordsReducer;