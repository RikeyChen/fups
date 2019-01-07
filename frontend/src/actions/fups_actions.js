import { getFups, getUserFups, writeFup, getDataFups, likeFup } from '../util/fups_api_util';

export const RECEIVE_FUPS = 'RECEIVE_FUPS';
export const RECEIVE_USER_FUPS = 'RECEIVE_USER_FUPS';
export const RECEIVE_NEW_FUP = 'RECEIVE_NEW_FUP';
export const CLEAR_FUPS = 'CLEAR_FUPS';
export const RECEIVE_DATA_FUPS = 'RECEIVE_DATA_FUPS';
export const REMOVE_DATA_FUPS = 'REMOVE_DATA_FUPS';
export const LIKE_FUP = 'LIKE_FUP';

export const receiveFups = fups => ({
  type: RECEIVE_FUPS,
  fups
})

export const receiveUserFups = fups => ({
  type: RECEIVE_USER_FUPS,
  fups
})

export const receiveNewFup = fup => ({
  type: RECEIVE_NEW_FUP,
  fup
})

export const clearFups = () => ({
  type: CLEAR_FUPS,
})

export const receiveDataFups = fups => ({
  type: RECEIVE_DATA_FUPS,
  fups
})

export const removeDataFups = () => ({
  type: REMOVE_DATA_FUPS,
})

export const likeUserFup = (like) => ({
  type: LIKE_FUP,
  like
})

export const fetchFups = (page) => dispatch =>
  getFups(page)
    .then(fups => dispatch(receiveFups(fups.data)))
    .catch(err => console.log(err)
);

export const fetchUserFups = (id, page) => dispatch =>
  getUserFups(id, page)
    .then(fups => dispatch(receiveUserFups(fups.data)))
    .catch(err => console.log(err)
);

export const composeFup = (data) => dispatch =>
  writeFup(data)
    .then(fup => dispatch(receiveNewFup(fup.data)))
    .catch(err => console.log(err)
);

export const fetchDataFups = (id) => dispatch =>
  getDataFups(id)
    .then(fups => dispatch(receiveDataFups(fups.data)))
    .catch(err => console.log(err)
);

export const fetchLike = (id, data) => dispatch =>
  likeFup(id, data)
    .then(like => dispatch(likeUserFup(like)))
    .catch(err => console.log(err)
);
