import React from 'react';
import FupCreate from "../fups/create_fup_container";
import Graph from '../data_viz/graph';
import Pie from '../data_viz/pie';
import '../../stylesheets/profile.css';
import FupsItem from "../fups/fups_item";
import UserFups from "../fups/user_fups";
import InfiniteScroll from "react-infinite-scroller";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true
    };
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.fupsLengthDiff = true;
  }

  // importantWords() {
  //   let wordCount = {}
  //   let words = []

  //   this.props.words.forEach(word => {
  //     if (wordCount[word]) {
  //       wordCount[word] += 1
  //     } else {
  //       wordCount[word] = 0
  //     }
  //   })

  //   for (key in wordCount) {
  //     if (wordCount[key] >)
  //   }
  // }

  componentDidMount() {
    this.props.fetchUserWords(this.props.currentUserId);
    this.props.fetchUserFups(this.props.currentUserId, 0);
    this.props.fetchDataFups(this.props.currentUserId);
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (this.props.fups.length === prevProps.fups.length) {
      this.fupsLengthDiff = false;
    }
  }

  componentWillUnmount() {
    this.props.clearFups();
    this.props.removeDataFups();
  }

  handleLoadMore(page) {
    const fupsLength = this.props.fups.length;
    this.props.fetchUserFups(this.props.currentUserId, page);
    debugger
    if (fupsLength % 25 > 0 && fupsLength % 25 < 25) {
      this.setState({ hasMore: false });
    }
  }

  renderGraphs() {
    if (this.props.fups) {
      return (
        <div className="graphs_container">
          <Pie />
          <Graph fups={this.props.dataFups} />
        </div>
      );
    }
  }

  render() {
    const { fups } = this.props;
    if (!(fups instanceof Array) || !fups.length) return null;
    const items = (
        fups.map((fup, idx) => (
          <div className="user-fups-container" key={idx}>
            <FupsItem key={fup._id} fup={fup} />
          </div>
        ))
    )
    // < UserFups fups = { this.props.fups } />
    return (
      <div className="profile_page">
        <div className="user_data_container">
          <h1>Welcome back INSERT NAME OF USER</h1>
          {this.renderGraphs()}
        </div>
        <FupCreate />
        <InfiniteScroll
          pageStart={0}
          loadMore={this.handleLoadMore}
          hasMore={this.state.hasMore}
        >
          {items}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Profile;