import "./Main.scss";
import team from "../../data/team";

import TicketCard from "../TicketCard/TicketCard";

import React from 'react'

const Main = () => {
    
    const teamJSX = team.map((person)=> {
        return (
        <div key={person.id}>
        <TicketCard name={person.name} role={person.role} />
        </div>
        )
    })

    
  return (
    <div className="main">
        {teamJSX}
    </div>
  )
}

export default Main