import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FupsAnonymous from './fups_anonymous';
import { fetchFups, clearFups, newFupLike, removeFupLike, getMostLikedFups } from '../../actions/fups_actions';
import { fetchWords, clearWords } from '../../actions/words_actions';

const mapStateToProps = state => ({
  fups: state.entities.fups,
  topFups: state.entities.topFups,
  currentUser: state.session.user.id,
  words: state.entities.words
})

const mapDispatchToProps = dispatch => ({
  fetchFups: (page) => dispatch(fetchFups(page)),
  getTopFups: (page) => dispatch(getMostLikedFups(page)),
  clearFups: () => dispatch(clearFups()),
  likeFup: (fup_id, type) => dispatch(newFupLike(fup_id, type)),
  unlikeFup: (fup_id, like_id, type) => dispatch(removeFupLike(fup_id, like_id, type)),
  fetchWords: () => dispatch(fetchWords()),
  clearWords: () => dispatch(clearWords())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FupsAnonymous));