import { RECEIVE_DATA_FUPS, RECEIVE_NEW_FUP, REMOVE_DATA_FUPS, RECEIVE_FUPS_COUNT, CLEAR_FUPS_COUNT } from '../actions/fups_actions';

const DataFupsReducer = (state = {line: [], activity: []}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_DATA_FUPS:
      newState.line = action.fups
      return newState;
    case RECEIVE_NEW_FUP:
      const newLine = []
      newState.line.forEach(fup => newLine.push(fup))
      newLine.push(action.fup)
      newState.line = newLine;
      return newState
    case REMOVE_DATA_FUPS:
      newState.line = []
      return newState;
    case RECEIVE_FUPS_COUNT:
      newState.activity = action.fups
      return newState
    case CLEAR_FUPS_COUNT:
      newState.activity = []
      return newState;
    default:
      return state
  }
}

export default DataFupsReducer;