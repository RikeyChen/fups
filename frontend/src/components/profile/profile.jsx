import React from 'react';
import FupCreate from "../fups/create_fup_container";
import Pie from '../data_viz/pie_chart';
import '../../stylesheets/profile.css';

class Profile extends React.Component {
  render() {
    return (
      <div className='profile_page'>
        <div className='user_data_container'>
          <h1>Welcome back INSERT NAME OF USER</h1>
          <div className='graphs_container'>
            {/* this is where pie chart will go */}
            <Pie />
          </div>
        </div>
        <FupCreate />
      </div>
    )
  }
}

export default Profile;