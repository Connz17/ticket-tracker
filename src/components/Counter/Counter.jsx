import CounterButtons from "../CounterButtons/CounterButtons";
import "./Counter.scss";

import React, { useState } from 'react'




const Counter = () => {

    const [ticketCount, setTicketCount] = useState(0)

    const [style, setStyle] = useState("white")


    const handleDecrease = () => {
        if (ticketCount === 0) {
            return
        }
        setTicketCount(ticketCount - 1);
        if (ticketCount < 16) {
            setStyle("orange") 
        }
        if (ticketCount < 11) {
            setStyle("yellow")
        }
        if (ticketCount < 8) {
            setStyle("green")
        }
        if (ticketCount < 4) {
            setStyle("white")
        }
        
  }
      const handleIncrease = () => {
    setTicketCount(ticketCount + 1);
        if (ticketCount > 1 ) {
            setStyle("green")
        }
        if (ticketCount > 5 ) {
            setStyle("yellow")
        }
        if (ticketCount > 8 ) {
            setStyle("orange")
        }
        if (ticketCount > 13 ) {
            setStyle("red")
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