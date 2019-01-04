import React from 'react';
import FupsItem from './fups_item';

class UserFups extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fups: []
    }
  }

  componentWillMount() {
    this.props.fetchUserFups(this.props.currentUser.id)
  }

  componentWillReceiveProps(newState) {
    this.setState({ fups: newState.fups });
  } 

  render() {
    if (this.state.fups.length === 0) {
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