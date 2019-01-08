import React from 'react';
import '../../stylesheets/trending.css';

class Trending extends React.Component {

  componentWillUnmount() {
    this.props.clearWords()
  }

  render() {

    let words = this.props.words.map(word => {
      return(
        <li key={word.word} className='trending_list_items'>
          <a target='_blank' href={`https://www.google.com/search?source=hp&q=${word.word}`}>
            {word.word}
          </a>
          <p className='mention'>{`mentioned ${word.count} times`}</p>
        </li>
      )
    })

    words = words.slice(0,12)

    return (
      <div className='trending'>
        <h1>
          Trending
        </h1>
        {words}
      </div>
    )
  }
}

export default Trending