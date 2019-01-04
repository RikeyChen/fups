import React from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

class Pie extends React.Component {
  render() {
    // hardcode data for testing
    const data = {
      labels: ['Driving', 'Drinking', 'Money', 'Oversleeping', 'Boss', 'Wife'],
      series: [5, 10, 5, 2, 10, 20],
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
      <div>
        <ChartistGraph data={data} options={options} listener={listener} type={type} />
      </div>
    )
  }
}

export default Pie;