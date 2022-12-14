import "./CounterButtons.scss";

import React from 'react'

const CounterButtons = (props) => {

    const {buttonText, handleChange} = props;
    

  return (
    <div className="counterButtons">        
        <button onClick={handleChange} className="button">{buttonText}</button>
    </div>
  )

};

export default CounterButtons