import React from 'react';
import Suggestions from './suggestions';

class SuggestionBox extends React.Component {
  // constructor() {
  //   super(props)
  // }


  render() {
    return (
      <div className='suggestion_box'>
        <h1>We've used artificial intelligence to pinpoint some areas in your life that 
          need improvement. Here is a list of links and resourced if you're interested.
        </h1>
        <Suggestions words={this.props.words}/>
      </div>
    )
  }
}

export default SuggestionBox