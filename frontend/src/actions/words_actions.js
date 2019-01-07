import { getUserWords, getWords } from '../util/words_api_util';

export const RECEIVE_USER_WORDS = 'RECEIVE_USER_WORDS'
export const RECEIVE_WORDS = 'RECEIVE_WORDS'
export const CLEAR_WORDS = 'CLEAR_WORDS';

const receiveUserWords = words => ({
  type: RECEIVE_USER_WORDS,
  words
})

const receiveWords = words => ({
  type: RECEIVE_WORDS,
  words
})

export const clearWords = words => ({
  type: CLEAR_WORDS
})

export const fetchUserWords = id => dispatch => (
  getUserWords(id)
    .then(words => dispatch(receiveUserWords(words)))
    .catch(err => console.log(err))
);

export const fetchWords = () => dispatch => (
  getWords()
    .then(words => dispatch(receiveWords(words)))
);