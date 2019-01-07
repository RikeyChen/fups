import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FupsAnonymous from './fups_anonymous';
import { fetchFups, clearFups, newFupLike, removeFupLike } from '../../actions/fups_actions';

const mapStateToProps = state => ({
  fups: state.entities.fups,
  currentUser: state.session.user.id
})

const mapDispatchToProps = dispatch => ({
  fetchFups: (page) => dispatch(fetchFups(page)),
  clearFups: () => dispatch(clearFups()),
  likeFup: (fup_id) => dispatch(newFupLike(fup_id)),
  unlikeFup: (fup_id, like_id) => dispatch(removeFupLike(fup_id, like_id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FupsAnonymous));