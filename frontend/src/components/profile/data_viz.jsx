import React from 'react';
import Pie from '../data_viz/pie_chart';

class DataViz extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class_name='user_data_container'>
        <h1>Welcome back INSERT USER NAME HERE</h1>
        <Pie />
      </div>
    );
  }
}

export default DataViz;