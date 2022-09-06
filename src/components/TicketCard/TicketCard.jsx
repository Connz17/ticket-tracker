import CardHeading from "../CardHeading/CardHeading";
import Counter from "../Counter/Counter";

import "./TicketCard.scss";

import React from 'react'

const TicketCard = () => {
  return (
    <div className="ticketCard">
        <CardHeading />
        <Counter />
    </div>
  )
}

export default TicketCard