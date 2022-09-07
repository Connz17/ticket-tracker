import CounterButtons from "../CounterButtons/CounterButtons";
import "./Counter.scss";

import React from 'react'

let ticketCount = 0


const Counter = () => {



  return (
    <div className="counter__card">
        <h2>Counter</h2>
        <div className="number">{ticketCount}</div>
        <CounterButtons buttonText={"+"} />
        <CounterButtons buttonText={"-"} />
    </div>
  )
};

export default Counter