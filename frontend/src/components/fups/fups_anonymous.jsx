import React from 'react';
import FupsItem from './fups_item';

class FupsAnonymous extends React.Component {
  componentDidMount() {
    this.props.fetchFups();
  }

  render() {
    const { fups } = this.props;
    if (!(fups instanceof Array) || !fups.length) return null;

    return (
      <div>
        <h1>FUPSAnonymous</h1>
        {fups.map(fup => (
          <div>
            <div className={`anon-image ${fup.iconNum}`} />
            <div>
              <FupsItem fup={fup} key={fup._id} />
              <div className="upvote-arrow" />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default FupsAnonymous;