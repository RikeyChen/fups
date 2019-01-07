import React from 'react';

class Suggestions extends React.Component{

  render() {
    const temporaryTest = []

    this.props.words.forEach(word => {
      temporaryTest.push(word.word);
    })
    
    const words = temporaryTest.map(word => {
      return (
        <li className='suggestion'>
          <a href={`https://www.google.com/search?source=hp&q=${word}+help+resources`}>
            {word} resources
          </a>
        </li>
      )
    })

    return (
      <ul className='life_suggestions'>
        {words}
      </ul>
    )
  }

}

export default Suggestions