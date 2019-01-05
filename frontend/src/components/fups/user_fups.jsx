import React from 'react';
import FupsItem from './fups_item';
import "../../stylesheets/fups_item.css"

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
    return (
      <div className="user-fups-container">
        {this.props.fups.map(fup => (
          <FupsItem fup={fup}/>
        ))}
      </div>
    )
  }
}

export default UserFups;