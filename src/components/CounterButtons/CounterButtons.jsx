import "./CounterButtons.scss";

import React from 'react'

const CounterButtons = (props) => {

    const buttonText = props;
    

  return (
    <div className="counterButtons">        
        <button className="button">{buttonText}</button>
    </div>
  )

};

export default CounterButtons