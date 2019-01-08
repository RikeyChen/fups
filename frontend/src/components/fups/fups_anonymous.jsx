import React from 'react';
import FupsItem from './fups_item';
import '../../stylesheets/fups_anonymous.css';
import InfiniteScroll from 'react-infinite-scroller';
import Trending from './trending';
import ScrollUpButton from "react-scroll-up-button";

class FupsAnonymous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      hasMoreTopFups: true,
      currentTab: 'All',
    }
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.handleLoadMoreTop = this.handleLoadMoreTop.bind(this);
    this.fupsLengthDiff = true;
    this.topFupsLengthDiff = true;
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchFups(0);
    this.props.getTopFups(0);
    this.props.fetchWords();
  }

  componentDidUpdate(prevProps) {
    if (this.props.fups.length === prevProps.fups.length
      && !prevProps.fups.length
      && this.state.currentTab === 'All') {
      this.fupsLengthDiff = false;
    }

    if (this.props.topFups.length === prevProps.topFups.length
      && !prevProps.topFups.length
      && this.state.currentTab === 'Top') {
      this.topFupsLengthDiff = false;
    }
  }

  componentWillUnmount() {
    this.props.clearFups();
  }

  handleLoadMore(page) {
    const fupsLength = this.props.fups.length;
    this.props.fetchFups(page);
    if (fupsLength % 25 !== 0 || !this.fupsLengthDiff) {
      this.setState({ hasMore: false })
    }
  }

  handleLoadMoreTop(page) {
    const topFupsLength = this.props.topFups.length;
    this.props.getTopFups(page);
    if (topFupsLength % 25 !== 0 || !this.topFupsLengthDiff) {
      this.setState({ hasMoreTopFups: false })
    }
  }

  handleLike(fupId) {
    const type = this.state.currentTab;
    return e => {
      e.target.id = 'disabled';
      this.props.likeFup(fupId, type)
        .then(() => {
          let target = document.getElementById('disabled');
          target.id = 'enabled';
        })
    }
  }

  handleUnlike(fup) {
    const fupId = fup._id
    const like = fup.likes.find(like => like.user === this.props.currentUser);
    const type = this.state.currentTab;
    return e => {
      e.target.id = 'disabled';
      this.props.unlikeFup(fupId, like._id, type)
        .then(() => {
          let target = document.getElementById('disabled');
          target.id = 'enabled'
        })
    }
  }

  handleTabClick(tab) {
    return e => {
      e.preventDefault();
      this.setState({ currentTab: tab })
    }
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const fups = this.state.currentTab === 'All' ? this.props.fups : this.props.topFups;
    const loader = (
      <div key={0} className="lds-ellipsis">
        <div key={1}></div>
        <div key={2}></div>
        <div key={3}></div>
        <div key={4}></div>
      </div>
    )

    if (!(fups instanceof Array) || !fups.length) return null;
    const items = (
      fups.map((fup, idx) => {
        return (
          <div className="fups-item-master" key={idx}>
            <div className='anon-image-container'>
              <div className={`anon-image anon${fup.iconNum}`} />
            </div>
            <div className="fups-item-main">
              <FupsItem fup={fup} key={fup._id} />
              <div className='upvote-arrow-container'>
                <div className='likes-count'>{this.numberWithCommas(fup.likes.length)}</div>
                {fup.likes.some(like => like.user === this.props.currentUser)
                  ? <div onClick={this.handleUnlike(fup)} className="upvote-arrow-liked" />
                  : (<div onClick={this.handleLike(fup._id)} className="upvote-arrow" />)
                }
              </div>
            </div>
          </div>
        )
      })
    )
    const infinite = (
      this.state.currentTab === 'All'
        ? <InfiniteScroll
          pageStart={0}
          loadMore={this.handleLoadMore}
          hasMore={this.state.hasMore}
          loader={loader}
        >
          {items}
        </InfiniteScroll>
        : <InfiniteScroll
          pageStart={0}
          loadMore={this.handleLoadMoreTop}
          hasMore={this.state.hasMoreTopFups}
          loader={loader}
        >
          {items}
        </InfiniteScroll>
    )

    return (
      <div className="fups-anonymous-container">
        <Trending words={this.props.words} clearWords={this.props.clearWords} />
        <div className='fups_anon'>
          <h1 className="fups-anon-header">FUPS Anonymous</h1>
          <div className="anon-tabs">
            <h1
              className={this.state.currentTab === 'All' ? 'currentTab' : null}
              onClick={this.handleTabClick('All')}
            >
              All
            </h1>
            <h1
              className={this.state.currentTab === 'Top' ? 'currentTab' : null}
              onClick={this.handleTabClick('Top')}
            >
              Top
            </h1>
          </div>
          <hr />
          {infinite}
          <ScrollUpButton />
        </div>
      </div>
    )
  }
}

export default FupsAnonymous;