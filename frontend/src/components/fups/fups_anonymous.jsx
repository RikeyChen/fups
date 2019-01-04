import React from 'react';

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