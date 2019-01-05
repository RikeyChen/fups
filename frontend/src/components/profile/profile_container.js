import { connect } from 'react-redux';
import { fetchUserWords } from '../../actions/words_actions';
import { fetchUserFups } from '../../actions/fups_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => ({
  words: state.entities.words,
  currentUserId: state.session.user.id, 
  fups: state.entities.fups
})

const mDTP = dispatch => ({
  fetchUserWords: (id) => dispatch(fetchUserWords(id)), 
  fetchUserFups: (id) => dispatch(fetchUserFups(id))
})

export default connect(mSTP, mDTP)(Profile);