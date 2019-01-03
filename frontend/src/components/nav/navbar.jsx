import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheets/navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/fups'}>FUPS Anonymous</Link>
          <Link to={'/profile'}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else if (this.props.location.pathname === '/') {
      return (
        <div>
          <Link to={'/signup'}>Sign up</Link>
          <Link to={'/login'}>Log in</Link>
        </div>
      );
    }
  }

  navElements() {
    let logo;
    if (this.props.loggedIn) {
      logo = (this.props.location.pathname === '/profile'
        ? <Link className="logo" to="/fups"><div className="logo loggedin" /></Link>
        : <Link className="logo" to="/profile"><div className="logo loggedin" /></Link>)
    } else {
      logo = (
        <div className="logo-container">
          <div className="logo loggedout" />
        </div>
      )
    }

    return (
      <div className="navbar-container">
        <div>{logo}</div>
        {this.getLinks()}
      </div>
    )
  }

  checkLoggin() {
    if (this.props.loggedIn) {
      return (
        <div className='loggedIn'>
          {this.navElements()}
        </div>
      )
    } else {
      return (
        <div className='loggedOut'>
          {this.navElements()}
        </div>
      )
    }
  };

  render() {
    return (
      <div>
        {this.checkLoggin()}
      </div>
    );
  }
}

export default NavBar;