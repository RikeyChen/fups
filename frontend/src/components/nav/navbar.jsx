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
    } else {
      return (
        <div>
          <Link to={'/signup'}>Sign up</Link>
          <Link to={'/login'}>Log in</Link>
        </div>
      );
    }
  }

  checkLoggin() {
    if (this.props.loggedIn) {
      return <div className='loggedIn'></div>
    } else {
      return <div className='loggedOut'></div> 
    }
  };

  render() {
    return (
      <div className="navbar-container">
        {this.checkLoggin()}
        <div>LOGO</div>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;