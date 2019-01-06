import { RECEIVE_DATA_FUPS } from '../actions/fups_actions';

const DataFupsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DATA_FUPS:
      return action.fups;
    default:
      return state
  }
}

export default DataFupsReducer;