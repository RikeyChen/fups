import React from 'react';
import Suggestions from './suggestions';

class SuggestionBox extends React.Component {

  render() {
    return (
      <div className='suggestion_box'>
        <h1 className="suggestion_height">We've used artificial intelligence to pinpoint some areas in your life that 
          need improvement. Here is a list of links and resourced if you're interested.
        </h1>
        <Suggestions words={this.props.words}/>
      </div>
    )
  }
}

export default SuggestionBox