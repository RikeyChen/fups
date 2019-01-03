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
    const link =
      (this.props.location.pathname === '/profile')
        ? <Link to={'/fups'}>FUPSAnonymous</Link>
        : <Link to={'/profile'}>Profile</Link>

    if (this.props.loggedIn) {
      return (
        <div className="navbar-links">
          {link}
          <button className="logout-button" onClick={this.logoutUser}>Logout</button>
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