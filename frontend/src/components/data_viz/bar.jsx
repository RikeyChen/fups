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

    const options = {
      distributeSeries: true
    }
    const type = 'Bar'

    return(
      <div>
        <ChartistGraph data={data} type={type} options={options}/>
      </div>
    )
  }
}

export default Bar;