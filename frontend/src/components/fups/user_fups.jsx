import React from 'react';
import FupsItem from './fups_item';
import "../../stylesheets/fups_item.css"

class UserFups extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   fups: this.props.fups
    // }
  }

  // componentWillMount() {
  //   // this.props.fetchUserFups(this.props.currentUser.id)
  // }

  // componentWillReceiveProps(newState) {
  //   this.setState({ fups: newState.fups });
  // } 

  render() {
    console.log(this.props);
    
    if (this.props.fups.length === 0) {
      return (
        <div>
          Post a Fup to get started!
        </div>
      )
    } else {
      return (
        <div>
          <h2>Wow your Fups!</h2>
          {this.props.fups.map(fup => (
            <FupsItem fup={fup}/>
          ))}
        </div>
      )
    } 
  }
}

export default UserFups;