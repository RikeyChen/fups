import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../stylesheets/session.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/profile');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            <span>X</span>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-main">
        <div className="session-form-container">
          <div className="session-form-header">
            <h1>Welcome to FUPS</h1>
            <h1>You can do better here</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="session-form">
              <br />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <br />
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <br />
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
              <br />
              <input type="submit" value="Sign Up" />
              <div>
                {this.renderErrors()}
              </div>
              <div>
                <span>Already have an account?</span>
                {' '}
                <Link to='/login'>Log In</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);