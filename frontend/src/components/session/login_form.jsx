import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../stylesheets/session.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/profile');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  loginDemoUser(e) {
    e.preventDefault();
    let user = {
      email: 'DemoUser@fups.com',
      password: 'password'
    }

    this.props.login(user);
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
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
            <h1>Welcome back!</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="session-form">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <br />
              <input type="submit" value="Log In" />
              <div>
                {this.renderErrors()}
              </div>
              <div id="demo" onClick={this.loginDemoUser}>
                <span>Demo Log In</span>
              </div>
              <div>
                <span>Don't have an account?</span>
                {' '}
                <Link to='/signup'>Sign Up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);