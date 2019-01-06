import React from 'react';
import FupsItem from './fups_item';
import '../../stylesheets/fups_anonymous.css';
import InfiniteScroll from 'react-infinite-scroller';

class FupsAnonymous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
    }
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.fupsLengthDiff = true;
  }

  componentDidMount() {
    this.props.fetchFups(0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.fups.length === prevProps.fups.length) {
      this.fupsLengthDiff = false;
    }
  }

  handleLoadMore(page) {
    const fupsLength = this.props.fups.length;
    this.props.fetchFups(page);
    if (fupsLength % 25 !== 0 || !this.fupsLengthDiff) {
      this.setState({ hasMore: false })
    }
  }

  render() {
    const { fups } = this.props;
    if (!(fups instanceof Array) || !fups.length) return null;
    const items = (
      fups.map(fup => (
        <div className="fups-item-master" key={fup._id}>
          <div className='anon-image-container'>
            <div className={`anon-image anon${fup.iconNum}`} />
          </div>
          <div className="fups-item-main">
            <FupsItem fup={fup} />
            <div className='upvote-arrow-container'>
              <div className="upvote-arrow" />
            </div>
          </div>
        </div>
      ))
    )

    return (
      <div className="fups-anonymous-container">
        <h1 className="fups-anon-header">FUPS Anonymous</h1>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.handleLoadMore}
          hasMore={this.state.hasMore}
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
          {items}
        </InfiniteScroll>
      </div>
    )
  }
}

export default FupsAnonymous;