import { getFups, getUserFups, writeFup, getDataFups, likeFup, unlikeFup } from '../util/fups_api_util';

export const RECEIVE_FUPS = 'RECEIVE_FUPS';
export const RECEIVE_USER_FUPS = 'RECEIVE_USER_FUPS';
export const RECEIVE_NEW_FUP = 'RECEIVE_NEW_FUP';
export const CLEAR_FUPS = 'CLEAR_FUPS';
export const RECEIVE_DATA_FUPS = 'RECEIVE_DATA_FUPS';
export const REMOVE_DATA_FUPS = 'REMOVE_DATA_FUPS';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

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

export const receiveLike = (payload) => {
  // debugger;
  return({
  type: RECEIVE_LIKE,
  like: payload.data
  })
}

export const removeLike = (payload) => ({
  type: REMOVE_LIKE,
  payload: payload.data
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

export const newFupLike = (fup_id) => dispatch =>
  likeFup(fup_id)
    .then(payload => dispatch(receiveLike(payload)))
    .catch(err => console.log(err)
);

export const removeFupLike = (fup_id, like_id) => dispatch => (
  unlikeFup(fup_id, like_id)
    .then(payload => dispatch(removeLike(payload)))
    .catch(err => console.log(err))
)