import React from 'react';
import FupCreate from "../fups/create_fup_container";
import Graph from '../data_viz/graph';
import Pie from '../data_viz/pie';
import '../../stylesheets/profile.css';
import FupsItem from "../fups/fups_item";
import InfiniteScroll from "react-infinite-scroller";
import SuggestionBox from '../data_viz/suggestions_box';

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
    this.props.fetchUserWords(this.props.currentUserId);
    this.props.fetchUserFups(this.props.currentUserId, 0);
    this.props.fetchDataFups(this.props.currentUserId);
  }

  componentWillUnmount() {
    this.props.clearFups();
    this.props.removeDataFups();
    this.props.clearWords();
  }

  handleLoadMore(page) {
    const fupsLength = this.props.fups.length;
    if (fupsLength !== 0) {
      this.props.fetchUserFups(this.props.currentUserId, page);
      if (fupsLength % 25 > 0 && fupsLength % 25 < 25) {
        this.setState({ hasMore: false });
      }
    } 
  }

  renderGraphs() {
    if (this.props.fups) {
      return (
        <div className='graphs_container'>
          <Pie words={this.props.words}/>
          <Graph fups={this.props.dataFups} />
        </div>
      );
    }
  }

  render() {

    const { fups } = this.props;
    const items = (
      fups.map((fup, idx) => (
        
        <div className="user-fups-container" key={idx}>
          <FupsItem key={fup._id} fup={fup} />
        </div>
      ))
    )

    return (
      <div className="profile_page">
        <div className='upper_page'>
          <SuggestionBox words={this.props.words}/>
          <div className="user_data_container">
            <h1>Welcome back to FUPS</h1>
            {this.renderGraphs()}
          </div>
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