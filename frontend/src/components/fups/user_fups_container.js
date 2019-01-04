import { connect } from 'react-redux';
import { fetchUserFups } from '../../actions/fups_actions';
import UserFups from './user_fups';

const mapStateToProps = (state) => {
  return {
    fups: Object.values(state.entities.fups),
    currentUser: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserFups: id => dispatch(fetchUserFups(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFups);