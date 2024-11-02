import CardHeading from "../CardHeading/CardHeading";
import Counter from "../Counter/Counter";
import "./TicketCard.scss";
import React from 'react'

const TicketCard = (props) => {

  const {name, role} = props;

  return (
    <div className="ticketCard">
    <CardHeading name={name} role={role} />
    <Counter />
    </div>
  )
}


export default TicketCard


//teamName={team.name} teamRole={team.role} teamArr={teamTickets}