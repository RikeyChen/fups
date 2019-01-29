import React from 'react';
import FupsItem from '../fups/fups_item';
import InfiniteScroll from "react-infinite-scroller";

class FupFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true
    };
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.fupsLengthDiff = true;
  }

  componentDidUpdate(prevProps) {
    if (this.props.fups.length === prevProps.fups.length && this.props.fups.length) {
      this.fupsLengthDiff = false;
    }
  }

  handleLoadMore(page) {
    this.props.fetchUserFups(this.props.currentUserId, page);
    if (!this.fupsLengthDiff) {
      this.setState({ hasMore: false });
    }
  }

  render(){
    if (!(this.props.fups instanceof Array) || !this.props.fups.length) return null;
  
    let loader;
    if (this.props.fups.length > 0) {
      loader = (
        <div className="lds-ellipsisp" key={Math.random}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
    }
  
    const items = this.props.fups.map((fup, idx) => (
      <div className="user-fups-container" key={idx}>
        <FupsItem key={fup._id} fup={fup} />
      </div>
    ))
  
    return (
      <InfiniteScroll pageStart={0} loadMore={this.handleLoadMore} hasMore={this.state.hasMore} loader={loader}>
        {items}
      </InfiniteScroll>
    )
  }
}

export default FupFeed;