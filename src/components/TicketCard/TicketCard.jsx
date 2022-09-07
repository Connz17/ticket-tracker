import CardHeading from "../CardHeading/CardHeading";
import Counter from "../Counter/Counter";
 import team from "../../data/team";

import "./TicketCard.scss";

import React from 'react'

const TicketCard = () => {

    const teamJSX = team.map((person)=> {
        return (
        <>
        <CardHeading name={person.name} role={person.role} />
        </>
        )
    })


  return (
    <div className="ticketCard">
        {teamJSX}
        <Counter />
    </div>
  )
}


export default TicketCard


//teamName={team.name} teamRole={team.role} teamArr={teamTickets}