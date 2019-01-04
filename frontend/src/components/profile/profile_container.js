import { connect } from 'react-redux';
import { fetchUserWords } from '../../actions/words_actions';
import Profile from './profile';

const mSTP = state => ({
  words: state.entities.words.data
})

const mDTP = dispatch => ({
  fetchUserWords: (id) => dispatch(fetchUserWords)
})

export default connect(mSTP, mDTP)(Profile);