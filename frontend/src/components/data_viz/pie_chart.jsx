import React from 'react';
// import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';

class Pie extends React.Component {
  render() {

    let data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    let options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function (value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    let type = 'Bar'

    return (
      <div className='bar_graph'>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}

export default Pie;