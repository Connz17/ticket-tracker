import CounterButtons from "../CounterButtons/CounterButtons";
import "./Counter.scss";

import React, { useState } from 'react'




const Counter = () => {

    const [ticketCount, setTicketCount] = useState(0)


    const handleDecrease = () => {
        if (ticketCount === 0) {
            return
        }
        setTicketCount(ticketCount - 1);
  }
      const handleIncrease = () => {

        setTicketCount(ticketCount + 1);
    };

//   if (ticketCount > 0 && ticketCount < 5) {
//             ticketCount.style.color = "red";
//         }

        // switch (ticketCount) {
        //     case ticketCount < 5:
        //         ticketCount.style.color = "red";
        //         break;
        
        //     default:
        //         break;
        // }

  return (
    <>
    <div className="counter__card">
        <h3 className="counter__heading">Counter</h3>
        <div className="number">{ticketCount}</div>
    </div>
    <div className="counter__buttons">
            <CounterButtons handleChange={handleDecrease} buttonText={"-"} />
            <CounterButtons handleChange={handleIncrease} buttonText={"+"} />
    </div>
    </>
  )
};

export default Counter