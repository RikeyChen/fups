import { RECEIVE_DATA_FUPS, RECEIVE_NEW_FUP } from '../actions/fups_actions';

const DataFupsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DATA_FUPS:
      return action.fups;
    case RECEIVE_NEW_FUP:
      const newState = []
      state.forEach(fup => newState.push(fup))
      newState.push(action.fup)
      return newState
    default:
      return state
  }
}

export default DataFupsReducer;