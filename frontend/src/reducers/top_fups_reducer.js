import { RECEIVE_TOP_FUPS } from '../actions/fups_actions';

const TopFupsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOP_FUPS:
      let newState = state.slice();
      action.fups.forEach(fup => newState.push(fup));
      return newState;
    default:
      return state;
  }
};

export default TopFupsReducer;