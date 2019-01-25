import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    this.loginDemoUser = this.loginDemoUser.bind(this);
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

  loginDemoUser(e) {
    e.preventDefault();
    let user = {
      email: 'DemoUser@fups.com',
      password: 'password',
    }

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
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: false,
      vertical: true,
    }
    return (
      <div className="session-main">
        <div className="splash-info">
          <Slider {...settings}>
            <div className='info-section'>
              <h1>Welcome to FUPS!</h1>
              <h1>Let's get you to your best self.</h1>
              <h2>What is FUPS?</h2>
              <h2>FUPS is For User Progress.</h2>
            </div>
            <div className='info-section'>
              <h1>FUPS is a progress tracker.</h1>
              <h2>Add FUPS to your profile to track your most common mistakes.</h2>
              <h2>View cool charts to see your data over time.</h2>
            </div>
            <div className='info-section'>
              <h1>Support System</h1>
              <h2>Receive online resources on areas where you can improve.</h2>
            </div>
            <div className='info-section'>
              <h1>Community</h1>
              <h2>Share your FUPS anonymously with the community.</h2>
              <h2>Upvote FUPS to show support.</h2>
            </div>
          </Slider>
        </div>
        <div className="session-form-container">
          <div className="session-form-header">
            <h1>Join today, it's free!</h1>
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
              <div id="demo" onClick={this.loginDemoUser}>
                <span>Demo Log In</span>
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