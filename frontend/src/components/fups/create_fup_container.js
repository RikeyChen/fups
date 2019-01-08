import {connect} from 'react-redux';
import {composeFup} from '../../actions/fups_actions';
import CreateFup from './create_fup';

const mapStateToProps = (state) => {
  return {
    formFields: {
      user: state.session.user.id,
      text: '',
      private: true
    },
    errors: state.errors.fup
  }
}

export default connect(mapStateToProps, {composeFup})(CreateFup);