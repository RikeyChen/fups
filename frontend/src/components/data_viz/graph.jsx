import React from 'react';
import ChartistGraph from 'react-chartist';
// import Chartist from 'chartist';

class Graph extends React.Component {  

  render() {
    let seq = 0,
      delays = 80,
      durations = 500;  

    const listener = {
      'created': function () {
        seq = 0;
      },
      'draw': function (data) {
        seq++;

        if (data.type === 'line') {
          data.element.animate({
            opacity: {
              begin: seq * delays + 1000,
              dur: durations,
              from: 0,
              to: 1
            }
          });
        } else if (data.type === 'label' && data.axis === 'x') {
          data.element.animate({
            y: {
              begin: seq * delays,
              dur: durations,
              from: data.y + 100,
              to: data.y,
              easing: 'easeOutQuart'
            }
          });
        } else if (data.type === 'label' && data.axis === 'y') {
          data.element.animate({
            x: {
              begin: seq * delays,
              dur: durations,
              from: data.x - 100,
              to: data.x,
              easing: 'easeOutQuart'
            }
          });
        } else if (data.type === 'point') {
          data.element.animate({
            x1: {
              begin: seq * delays,
              dur: durations,
              from: data.x - 10,
              to: data.x,
              easing: 'easeOutQuart'
            },
            x2: {
              begin: seq * delays,
              dur: durations,
              from: data.x - 10,
              to: data.x,
              easing: 'easeOutQuart'
            },
            opacity: {
              begin: seq * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: 'easeOutQuart'
            }
          });
        } else if (data.type === 'grid') {
          let pos1Animation = {
            begin: seq * delays,
            dur: durations,
            from: data[data.axis.units.pos + '1'] - 30,
            to: data[data.axis.units.pos + '1'],
            easing: 'easeOutQuart'
          };

          let pos2Animation = {
            begin: seq * delays,
            dur: durations,
            from: data[data.axis.units.pos + '2'] - 100,
            to: data[data.axis.units.pos + '2'],
            easing: 'easeOutQuart'
          };

          let animations = {};
          animations[data.axis.units.pos + '1'] = pos1Animation;
          animations[data.axis.units.pos + '2'] = pos2Animation;
          animations['opacity'] = {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
          };

          data.element.animate(animations);
        }
      }
    }

    let lineChartData = {
      labels: [],
      series: [
        [.5, .9, .7, .8, -.5, .3, -.5, -.4]
      ]
    }
    let lineChartOptions = {
      low: -1,
      high: 1,
      showArea: true
    }

    return (
      <div className='bar_graph'>
        <ChartistGraph className='graph_item' listener={listener} data={lineChartData} options={lineChartOptions} type={'Line'} />
        <div className='bar_graph_explanation'>
          <p>
            This demonstrates sentiment per fup in chronological order. 
            Sentiment is a measure of attitude and we display it from very negative (-1) to very positive (1).
          </p>
        </div>
      </div>
    )
  }
}

export default Graph;