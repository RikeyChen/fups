import { connect } from 'react-redux';
import { fetchUserWords } from '../../actions/words_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => ({
  words: state.entities.words,
  currentUserId: state.session.user.id
})

const mDTP = dispatch => ({
  fetchUserWords: (id) => dispatch(fetchUserWords(id))
})

export default connect(mSTP, mDTP)(Profile);