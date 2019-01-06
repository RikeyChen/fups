import React from 'react';
import FupCreate from "../fups/create_fup_container";
import Graph from '../data_viz/graph';
import Pie from '../data_viz/pie';
import '../../stylesheets/profile.css';
import UserFups from "../fups/user_fups";

class Profile extends React.Component {
  constructor(props) {
    super(props);
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
    this.props.fetchUserWords(this.props.currentUserId) 
    this.props.fetchUserFups(this.props.currentUserId)
    this.props.fetchDataFups(this.props.currentUserId)
  }

  renderGraphs() {
    if (this.props.fups) {
      return (
        <div className='graphs_container'>
          <Pie />
          <Graph fups={this.props.dataFups} />
        </div>
      )
    }
  }

  render() {
    return (
      <div className='profile_page'>
        <div className='user_data_container'>
          <h1>Welcome back INSERT NAME OF USER</h1>
          {this.renderGraphs()}
        </div>
        <FupCreate />
        <UserFups fups={this.props.fups}/>
      </div>
    )
  }
}

export default Profile;