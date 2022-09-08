import "./Main.scss";
import team from "../../data/team";

import TicketCard from "../TicketCard/TicketCard";



import React, { useState } from 'react'


const Main = () => {

    
        const [newName, setNewName] = useState("")
        const [newRole, setNewRole] = useState("")

        const newTeam = [...team]

        const [updatedTeam, setUpdatedTeam] = useState(newTeam)


    
    const newEmployee = {
        id: newTeam.length + 1,
        name: newName,
        role: newRole,  
    }
    
    
    const handleNewEmployee = (e) => {
        e.preventDefault()
        team.push(newEmployee)
        setUpdatedTeam(newTeam)
        
    }
    
    const teamJSX = newTeam.map((person)=> {
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
        <div className="form__container">
        <form className="form">
            <label htmlFor="name">Full Name: </label>
            <input type="text" id="name" placeholder="John Doe"
                vale={newName} onChange={(e) => setNewName(e.target.value)}/>
            <label htmlFor="role">Role: </label>
            <input type="text" id="role" placeholder="Junior Software Engineer"
                vale={newRole} onChange={(e) => setNewRole(e.target.value)}/>
            <button onClick={handleNewEmployee}>ADD</button>
        </form>
        </div>
    </div>
  )
}

export default Main