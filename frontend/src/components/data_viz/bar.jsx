import React from 'react';
import ChartistGraph from 'react-chartist';

class Bar extends React.Component {
  render() {
    const labels = []
    const series = []

    this.props.fups.forEach(fup => {
      labels.push(fup.day);
      series.push(fup.count)
    })

    const data = {
      labels,
      series,
    }

    const listener = {
      'draw': (data) => {
        if (data.type === 'bar') {
          data.element.animate({
            y2: {
              dur: '1s',
              from: data.y1,
              to: data.y2
            }
          });
          }
        }
      }

    const options = {
      distributeSeries: true
    }
    const type = 'Bar'

    return(
      <div>
        <ChartistGraph data={data} type={type} options={options} listener={listener}/>
      </div>
    )
  }
}

export default Bar;