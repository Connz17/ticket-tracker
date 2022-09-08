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
        <div className="card__container">
            {teamJSX}
        </div>
        <div className="form_container">
            <form className="form" action="./Main.jsx">
                <label htmlFor="firstN">First Name: </label>
                <input type="text" id="firstN" placeholder="John"/>
                <label htmlFor="lastN">Last Name: </label>
                <input type="text" id="lastN" placeholder="Doe"/>
                <input type="submit" value="ADD" />
            </form>
        </div>
    </div>
  )
}

export default Main