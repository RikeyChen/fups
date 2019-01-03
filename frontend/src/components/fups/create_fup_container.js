import {connect} from 'react-redux';
import {composeFup} from '../../actions/fups_actions';
import CreateFup from './create_fup';

const mapStateToProps = (state) => {
  return {
    user: state.session.user.id,
    text: '',
    private: false
  }
}

export default connect(mapStateToProps, {composeFup})(CreateFup);