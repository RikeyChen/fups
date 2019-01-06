import React from 'react';
import FupsItem from './fups_item';
import "../../stylesheets/fups_item.css"
import InfiniteScroll from 'react-infinite-scroller';

class UserFups extends React.Component {

  render() {
    return (
      <div className="user-fups-container">
        {this.props.fups.map(fup => (
          
          <FupsItem key={fup._id} fup={fup} />
        ))}
      </div>
    )
  }
}

export default UserFups;