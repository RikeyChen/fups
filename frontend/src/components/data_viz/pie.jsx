import React from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

class Pie extends React.Component {

  chartData() {
    // TEMPORARY CODE SO IT DOESN'T BREAK
    const items = (
      <li>
        data - 20%
      </li>
    )

    return (
      <ul>
        {items}
      </ul>
    )
  }

  render() {
    const labels = []
    const series = []
    this.props.words.forEach(word => {
      labels.push(word.word);
      series.push(word.count);
    })
 

    // hardcode data for testing
    const data = {
      labels,
      series,
    }

    const options = {
      donut: true,
      showSeries: true,
    }

    const type = 'Pie';

    const listener = {
      'draw': data => {
        if(data.type === 'slice') {
          const pathLength = data.element._node.getTotalLength();

          data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
          });

          const animation = {
            'stroke-dashoffset': {
              id: 'anim' + data.index,
              dur: 500,
              from: -pathLength + 'px',
              to: '0px',
              easing: Chartist.Svg.Easing.easeOutQuint,
              fill: 'freeze'
            }
          }
          
          if (data.index !== 0) {
            animation['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
          }

          data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
          });

          data.element.animate(animation, false);
        }
      }
    }

    return(
      <div className='pie_chart'>
        <ChartistGraph className='pie_item' data={data} options={options} listener={listener} type={type} />
        {this.chartData()}
      </div>
    )
  }
}

export default Pie;