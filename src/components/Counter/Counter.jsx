import CounterButtons from "../CounterButtons/CounterButtons";
import "./Counter.scss";

import React, { useState } from 'react'




const Counter = () => {

    const [ticketCount, setTicketCount] = useState(0)

    const [style, setStyle] = useState("red")


    const handleDecrease = () => {
        if (ticketCount === 0) {
            return
        }
        setTicketCount(ticketCount - 1);
        if (ticketCount < 16) {
            setStyle("blue")
        }
        if (ticketCount < 11) {
            setStyle("green")
        }
        if (ticketCount < 8) {
            setStyle("yellow")
        }
        if (ticketCount < 4) {
            setStyle("red")
        }
        
  }
      const handleIncrease = () => {
    setTicketCount(ticketCount + 1);
        if (ticketCount > 1 ) {
            setStyle("yellow")
        }
        if (ticketCount > 5 ) {
            setStyle("green")
        }
        if (ticketCount > 8 ) {
            setStyle("blue")
        }
        if (ticketCount > 13 ) {
            setStyle("white")
        }
        

    };


  return (
    <>
    <div className="counter__card">
        <h3 className="counter__heading">Counter</h3>
        <div className="number" style={{color:style}}>{ticketCount}</div>
    </div>
    <div className="counter__buttons">
            <CounterButtons handleChange={handleDecrease} buttonText={"-"} />
            <CounterButtons handleChange={handleIncrease} buttonText={"+"} />
    </div>
    </>
  )
};

export default Counter