import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props) => {
  return (
    <Sparklines data={props.data}>
      <SparklinesLine color="red" />
    </Sparklines>
  )
}

export default Chart;