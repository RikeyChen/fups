import React from 'react';
import FupsItem from './fups_item';

class FupsAnonymous extends React.Component {
  componentDidMount() {
    this.props.fetchFups();
  }

  render() {
    const fups = this.props;
    return (
      <div>
        <h1>FUPSAnonymous</h1>
      </div>
    )
  }
}

export default FupsAnonymous;