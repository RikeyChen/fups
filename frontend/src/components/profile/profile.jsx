import React from 'react';
import FupCreate from "../fups/create_fup_container";
import Graph from '../data_viz/graph';
import Pie from '../data_viz/pie';
import '../../stylesheets/profile.css';
import FupsItem from "../fups/fups_item";
import InfiniteScroll from "react-infinite-scroller";
import SuggestionBox from '../data_viz/suggestions_box';
import ScrollUpButton from "react-scroll-up-button";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true
    };
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.fupsLengthDiff = true;
  }

  componentDidMount() {
    this.props.fetchDataFups(this.props.currentUserId)
      .then(() => this.props.fetchUserFups(this.props.currentUserId, 0))
      .then(() => this.props.fetchUserWords(this.props.currentUserId));
  }

  componentWillUnmount() {
    this.props.clearFups();
    this.props.removeDataFups();
    this.props.clearWords();
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

  renderGraphs() {
    if (this.props.fups) {
      return (
        <>
          <div className='graphs_container'>
            <Pie words={this.props.words} />
            <Graph fups={this.props.dataFups} />
          </div>
        </>
      );
    }
  }

  render() {
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

    const { fups } = this.props;

    if (!(fups instanceof Array) || !fups.length) return null;
    // if (!(fups instanceof Array)) return null;
    const items = (
      fups.map((fup, idx) => (
        <div className="user-fups-container" key={idx}>
          <FupsItem key={fup._id} fup={fup} />
        </div>
      ))
    )

    return (
      <div className="profile_page">
        <SuggestionBox words={this.props.words} />
        <h1 className="fups-anon-header">FUPS Dashboard</h1>
        <div className="upper_page">
          <div className="user_data_container">
            <div className='graph-headers'>
              <div>
                <h1>KeyWords</h1>
              </div>
              <div>
                <h1>Sentiment</h1>
              </div>
            </div>
            {this.renderGraphs()}
          </div>
        </div>
        <FupCreate />

        <InfiniteScroll pageStart={0} loadMore={this.handleLoadMore} hasMore={this.state.hasMore} loader={loader}>
          {items}
        </InfiniteScroll>
        <ScrollUpButton className='ScrollUpButton__Container' />
      </div>
    );
  }
}

export default Profile;