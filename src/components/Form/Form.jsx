// import "./Form.scss";
// import team from "../../data/team";

// import React, { useState } from 'react'

// const Form = () => {

//     const [newName, setNewName] = useState("")
//     const [newRole, setNewRole] = useState("")

// const newEmployee = {
//     id: team.length + 1,
//     name: newName,
//     role: newRole,  
// }


// const handleNewEmployee = (e) => {
//     e.preventDefault()
//     team.push(newEmployee)
//     console.log(team);    
//     ;
// }





//  console.log(newEmployee);


//   return (
//         <form className="form">
//             <label htmlFor="name">Full Name: </label>
//             <input type="text" id="name" placeholder="John Doe"
//                 vale={newName} onChange={(e) => setNewName(e.target.value)}/>
//             <label htmlFor="role">Role: </label>
//             <input type="text" id="role" placeholder="Junior Software Engineer"
//                 vale={newRole} onChange={(e) => setNewRole(e.target.value)}/>
//             <button onClick={handleNewEmployee}>ADD</button>
//         </form>
//   )
// }

// export default Form