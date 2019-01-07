import { connect } from 'react-redux';
import { fetchUserWords } from '../../actions/words_actions';
import { fetchUserFups, fetchDataFups, clearFups, removeDataFups, fetchLike } from '../../actions/fups_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => ({
  words: state.entities.words,
  currentUserId: state.session.user.id, 
  fups: state.entities.fups,
  dataFups: state.entities.dataFups
})

const mDTP = dispatch => ({
  fetchUserWords: id => dispatch(fetchUserWords(id)),
  fetchUserFups: (id, page) => dispatch(fetchUserFups(id, page)),
  clearFups: () => dispatch(clearFups()),
  fetchDataFups: id => dispatch(fetchDataFups(id)),
  removeDataFups: () => dispatch(removeDataFups()),
  fetchLike: (id, data) => dispatch(fetchLike(id, data))
});

export default connect(mSTP, mDTP)(Profile);