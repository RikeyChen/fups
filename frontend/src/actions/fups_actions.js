import {getFups, getUserFups, writeFups} from '../util/fups_api_uitl';

export const RECEIVE_FUPS = 'RECEIVE_FUPS';
export const RECEIVE_USER_FUPS = 'RECEIVE_USER_FUPS';
export const RECEIVE_NEW_FUPS = 'RECEIVE_NEW_FUPS';

export const receiveFups = fups => ({
  type: RECEIVE_FUPS,
  fups
})

export const receiveUserFups = fups => ({
  type: RECEIVE_USER_FUPS,
  fups
})

export const receiveNewFup = fup => ({
  type: RECEIVE_NEW_FUPS,
  fup
})

export const fetchFups = () => dispatch =>
  getFups()
    .then(fups => dispatch(receiveFups(fups)))
    .catch(err => console.log(err)
);

export const fetchUserFups = () => dispatch =>
  getUserFups()
    .then(fups => dispatch(receiveUserFups(fups)))
    .catch(err => console.log(err)
);

export const composeFup = (data) => dispatch =>
  writeFup(data)
    .then(fup => dispatch(receiveFups(fup)))
    .catch(err => console.log(err)
);