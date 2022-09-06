import "./CounterButtons.scss";

import React from 'react'
import handleTicketCount from "../Counter/Counter"

const CounterButtons = () => {
    
const counterBtn = document.querySelectorAll(".button");

counterBtn.forEach(Btn => {
    Btn.addEventListener("click", () => {
        handleTicketCount()
        })
});

  return (
    <div className="counterButtons">
        <button value={"-"} className="button">-</button>
        <button value={"+"} className="button">+</button>
    </div>
  )

};

export default CounterButtons