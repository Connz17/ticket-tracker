import "./Heading.scss";
import ticketPic from "../../assets/images/ticket-clipart-transparent-9.png";




import React from 'react'

const Heading = () => {
  return (
    <div className="heading">
        <h1 className="heading__title">Ticket Tracker</h1>
        <img className="heading__image" src={ticketPic} alt="" />
    </div>
  )
}

export default Heading