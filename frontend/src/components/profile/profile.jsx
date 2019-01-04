import React from 'react';
import FupCreate from "../fups/create_fup_container";
import Graph from '../data_viz/graph';
import Pie from '../data_viz/pie';
import '../../stylesheets/profile.css';
import UserFups from "../fups/user_fups_container";

class Profile extends React.Component {

  renderGraphs() {
    return (
      <div className='graphs_container'>
        <Pie />
        <Graph />
      </div>
    )
  }

  render() {
    return (
      <div className='profile_page'>
        <div className='user_data_container'>
          <h1>Welcome back INSERT NAME OF USER</h1>
          {this.renderGraphs()}
        </div>
        <FupCreate />
        <UserFups />
      </div>
    )
  }
}

export default Profile;