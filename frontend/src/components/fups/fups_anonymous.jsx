import React from 'react';
import FupsItem from './fups_item';
import '../../stylesheets/fups_anonymous.css';
import InfiniteScroll from 'react-infinite-scroller';
import Trending from './trending';

class FupsAnonymous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      currentTab: 'All',
    }
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.fupsLengthDiff = true;
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchFups(0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.fups.length === prevProps.fups.length) {
      this.fupsLengthDiff = false;
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

  handleLike(fupId) {
    return e => {
      e.target.id = 'disabled';
      this.props.likeFup(fupId)
        .then(() => {
          let target = document.getElementById('disabled');
          target.id = 'enabled';
        })
    }
  }

  handleUnlike(fup) {
    const fupId = fup._id
    const like = fup.likes.find(like => like.user === this.props.currentUser);
    return e => {
      e.target.id = 'disabled';
      this.props.unlikeFup(fupId, like._id)
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
    const { fups } = this.props;
    const loader = (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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

    return (
      <div className="fups-anonymous-container">
        <Trending />
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
          <InfiniteScroll
            pageStart={0}
            loadMore={this.handleLoadMore}
            hasMore={this.state.hasMore}
            loader={loader}
          >
            {items}
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

export default FupsAnonymous;