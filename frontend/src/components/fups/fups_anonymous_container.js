import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FupsAnonymous from './fups_anonymous';
import { fetchFups, clearFups, newFupLike, removeFupLike, getMostLikedFups } from '../../actions/fups_actions';

const mapStateToProps = state => ({
  fups: state.entities.fups,
  topFups: state.entities.topFups,
  currentUser: state.session.user.id
})

const mapDispatchToProps = dispatch => ({
  fetchFups: (page) => dispatch(fetchFups(page)),
  getTopFups: (page) => dispatch(getMostLikedFups(page)),
  clearFups: () => dispatch(clearFups()),
  likeFup: (fup_id) => dispatch(newFupLike(fup_id)),
  unlikeFup: (fup_id, like_id) => dispatch(removeFupLike(fup_id, like_id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FupsAnonymous));