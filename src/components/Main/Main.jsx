import "./Main.scss";
import team from "../../data/team";

import TicketCard from "../TicketCard/TicketCard";



import React, { useState } from 'react'
import Form from "../Form/Form";


const Main = () => {
const newTeam = [...team]
    
        const [newName, setNewName] = useState("")
        const [newRole, setNewRole] = useState("")
        const [updatedTeam, setUpdatedTeam] = useState(newTeam)

    const newEmployee = {
        id: newTeam.length + 1,
        name: newName,
        role: newRole,  
    }    
    
    const handleNameInput = (e) => {
        setNewName(e.target.value);
    }

    const handleRoleInput = (e) => {
        setNewRole(e.target.value);
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
            <Form formName={handleNameInput} formRole={handleRoleInput} handleNewEmployee={handleNewEmployee}/>
        </div>
    </div>
  )
}

export default Main