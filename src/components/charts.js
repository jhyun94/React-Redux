import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props) => {
  return (
    <div>
      <h4>{props.measurement}</h4>
      <Sparklines data={props.data}>
        <SparklinesLine color="red" />
      </Sparklines>
    </div>
  )
}

export default Chart;