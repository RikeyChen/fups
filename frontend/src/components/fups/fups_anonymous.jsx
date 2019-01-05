import React from 'react';
import FupsItem from './fups_item';
import '../../stylesheets/fups_anonymous.css';

class FupsAnonymous extends React.Component {
  componentDidMount() {
    this.props.fetchFups();
  }

  render() {
    const { fups } = this.props;
    if (!(fups instanceof Array) || !fups.length) return null;

    return (
      <div className="fups-anonymous-container">
        <h1>FUPSAnonymous</h1>
        {fups.map(fup => (
          <div className="fups-item-master">
            <div>
              <div className={`anon-image anon${fup.iconNum}`} />
            </div>
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