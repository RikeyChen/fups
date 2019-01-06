import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FupsAnonymous from './fups_anonymous';
import { fetchFups, clearFups } from '../../actions/fups_actions';

const mapStateToProps = state => ({
  fups: state.entities.fups
})

const mapDispatchToProps = dispatch => ({
  fetchFups: (page) => dispatch(fetchFups(page)),
  clearFups: () => dispatch(clearFups())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FupsAnonymous));