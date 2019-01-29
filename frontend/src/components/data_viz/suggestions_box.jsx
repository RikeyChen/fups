import React from 'react';
import Suggestions from './suggestions';
import '../../stylesheets/trending.css'

class SuggestionBox extends React.Component {

  render() {
    let suggestions;
    if (this.props.words.length !== 0) {
      suggestions = (
        <div className='suggestion_box'>
          <h1 className="suggestion_height">We've used artificial intelligence to pinpoint some areas in your life that
            are causing you stress based on your posts. Here is a list of links and resources to get you started.
        </h1>
          <Suggestions words={this.props.words} />
        </div>
      )
    } else {
      suggestions = (
        <div className='suggestion_box'>
          <h1 className="suggestion_height">We do no have enough information to identify areas of improvement. Please post more to receive insight.</h1>
        </div>
      )
    }
    return (
      <>
        {suggestions}
      </>
    )
  }
}

export default SuggestionBox