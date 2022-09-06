import CounterButtons from "../CounterButtons/CounterButtons";
import "./Counter.scss";

import React from 'react'

const ticketCount = document.querySelector(".number");

export const handleTicketCount = (e) => {  
    console.log(Btn);
    switch (e.target.value) {
        case "+":
            ticketCount.innerHTML += 1
            break;
        case "-":
            ticketCount.textContent -= 1
            break;
        default:
            break;
    }
}

const Counter = () => {



  return (
    <div className="counter__card">
        <h2>Counter</h2>
        <div className="number">0</div>
        <CounterButtons />
    </div>
  )
};

export default Counter