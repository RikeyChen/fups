import React from 'react';

class Trending extends React.Component {

  componentWillUnmount() {
    this.props.clearWords();
  }

  render() {
    const trending = []

    this.props.words.forEach(word => {
      trending.push(word.word);
    })

    const words = trending.map(word => {
      return (
        <li key={word} className='trending_list_items'>
          <a target='_blank' href={`https://www.google.com/search?source=hp&q=${word}`}>
            {word}
          </a>
        </li>
      )
    })

    return (
      <div className='trending'>
        <h1>
          Trending triggers
        </h1>
        {words}
      </div>
    )
  }
}

export default Trending