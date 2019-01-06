import { getFups, getUserFups, writeFup } from '../util/fups_api_util';

export const RECEIVE_FUPS = 'RECEIVE_FUPS';
export const RECEIVE_USER_FUPS = 'RECEIVE_USER_FUPS';
export const RECEIVE_NEW_FUP = 'RECEIVE_NEW_FUP';
export const CLEAR_FUPS = 'CLEAR_FUPS';

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

export const fetchFups = (page) => dispatch =>
  getFups(page)
    .then(fups => dispatch(receiveFups(fups.data)))
    .catch(err => console.log(err)
);

export const fetchUserFups = (id) => dispatch =>
  getUserFups(id)
    .then(fups => dispatch(receiveUserFups(fups.data)))
    .catch(err => console.log(err)
);

export const composeFup = (data) => dispatch =>
  writeFup(data)
    .then(fup => dispatch(receiveNewFup(fup.data)))
    .catch(err => console.log(err)
);