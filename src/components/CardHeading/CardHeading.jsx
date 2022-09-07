import "./CardHeading.scss";

import React from 'react'
//use props to change the name of employee

const CardHeading = (props) => {

        const {name, role} = props


  return (
    <>
    <h2>{name}</h2>
    <h2>{role}</h2>
    </>
  )
}

export default CardHeading