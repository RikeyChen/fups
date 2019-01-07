import { connect } from 'react-redux';
import { fetchUserWords, clearWords } from '../../actions/words_actions';
import { fetchUserFups, fetchDataFups, clearFups, removeDataFups, fetchLike, fetchFupsCount } from '../../actions/fups_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => ({
  words: state.entities.words,
  currentUserId: state.session.user.id, 
  fups: state.entities.fups,
  dataFups: state.entities.dataFups.line,
  fupActivity: state.entities.dataFups.activity
})

const mDTP = dispatch => ({
  fetchUserWords: id => dispatch(fetchUserWords(id)),
  fetchUserFups: (id, page) => dispatch(fetchUserFups(id, page)),
  clearFups: () => dispatch(clearFups()),
  fetchDataFups: id => dispatch(fetchDataFups(id)),
  removeDataFups: () => dispatch(removeDataFups()),
  fetchLike: (id, data) => dispatch(fetchLike(id, data)),
  clearWords: () => dispatch(clearWords()),
  fetchFupsCount: id => dispatch(fetchFupsCount(id))
});

export default connect(mSTP, mDTP)(Profile);