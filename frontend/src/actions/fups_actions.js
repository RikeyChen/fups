import { getFups, getUserFups, writeFup, getDataFups, likeFup, unlikeFup, getFupActivity, getTopFups } from '../util/fups_api_util';

export const RECEIVE_FUPS = 'RECEIVE_FUPS';
export const RECEIVE_USER_FUPS = 'RECEIVE_USER_FUPS';
export const RECEIVE_NEW_FUP = 'RECEIVE_NEW_FUP';
export const CLEAR_FUPS = 'CLEAR_FUPS';
export const RECEIVE_DATA_FUPS = 'RECEIVE_DATA_FUPS';
export const REMOVE_DATA_FUPS = 'REMOVE_DATA_FUPS';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_FUPS_COUNT = 'RECEIVE_FUPS_COUNT';
export const CLEAR_FUPS_COUNT = 'CLEAR_FUPS_COUNT';
export const RECEIVE_TOP_FUPS = 'RECEIVE_TOP_FUPS';
export const RECEIVE_TOP_LIKE = 'RECEIVE_TOP_LIKE';
export const REMOVE_TOP_LIKE = 'REMOVE_TOP_LIKE';
export const RECEIVE_FUP_ERROR = 'RECEIVE_FUP_ERROR';

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
  return({
    type: RECEIVE_LIKE,
    like: payload.data
  })
}

export const removeLike = (payload) => {
  return ({
    type: REMOVE_LIKE,
    payload: payload.data
  })
}

export const receiveTopLike = (payload) => {
  return ({
    type: RECEIVE_TOP_LIKE,
    like: payload.data
  })
}

export const removeTopLike = (payload) => {
  return ({
    type: REMOVE_TOP_LIKE,
    payload: payload.data
  })
}

export const receiveTopFups = (fups) => ({
  type: RECEIVE_TOP_FUPS,
  fups
})

const receiveFupsCount = fups => ({
  type: RECEIVE_FUPS_COUNT,
  fups
})

export const clearFupCount = () => ({
  type: CLEAR_FUPS_COUNT
})

export const receiveFupError = errors => ({
  type: RECEIVE_FUP_ERROR,
  errors
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
    .catch(err => dispatch(receiveFupError(err.response.data))
);

export const fetchDataFups = (id) => dispatch =>
  getDataFups(id)
    .then(fups => dispatch(receiveDataFups(fups.data)))
    .catch(err => console.log(err)
);

export const newFupLike = (fup_id, type) => dispatch =>
  likeFup(fup_id)
    .then(payload => {
      type === 'All'
      ? dispatch(receiveLike(payload))
      : dispatch(receiveTopLike(payload))
    })
    .catch(err => console.log(err)
);

export const removeFupLike = (fup_id, like_id, type) => dispatch => (
  unlikeFup(fup_id, like_id)
    .then(payload => {
      type === 'All'
      ? dispatch(removeLike(payload))
      : dispatch(removeTopLike(payload))
    })
    .catch(err => console.log(err))
)

export const fetchFupsCount = id => dispatch => (
  getFupActivity(id)
    .then(fups => dispatch(receiveFupsCount(fups.data)))
    .catch(err => console.log(err))
)

export const getMostLikedFups = page => dispatch => (
  getTopFups(page)
    .then(fups => dispatch(receiveTopFups(fups.data)))
    .catch(err => console.log(err))
)