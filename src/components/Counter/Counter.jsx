import CounterButtons from "../CounterButtons/CounterButtons";
import "./Counter.scss";

import React, { useState } from 'react'




const Counter = () => {

    const [ticketCount, setTicketCount] = useState(0)

    const handleDecrease = () => {
        console.log("down");
        setTicketCount(ticketCount - 1);
  }
      const handleIncrease = () => {
        console.log("up");
        setTicketCount(ticketCount + 1);
    };

  return (
    <div className="counter__card">
        <h3>Counter</h3>
        <div className="number">{ticketCount}</div>
        <div className="counter__buttons">
            <CounterButtons handleChange={handleDecrease} buttonText={"-"} />
            <CounterButtons handleChange={handleIncrease} buttonText={"+"} />
        </div>
    </div>
  )
};

export default Counter