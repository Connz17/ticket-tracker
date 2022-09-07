import "./CardHeading.scss";

import React from 'react'
//use props to change the name of employee

const CardHeading = (props) => {

        const {name, role} = props


  return (
    <>
    <h2 className="card__name">{name}</h2>
    <h3>{role}</h3>
    </>
  )
}

export default CardHeading