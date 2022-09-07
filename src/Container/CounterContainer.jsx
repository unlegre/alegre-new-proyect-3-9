import React from 'react'
import './CounterContainer.css'
// importe components
import  Counter from "../components/Counter/Counter.jsx";
import {IoMdAlarm} from 'react-icons/io';



function CounterContainer() {
  return (
    <div className="Counter-Container">
      <h1> Mi Contador</h1>
      <div className="Counter-icon">
        <IoMdAlarm/>
      </div>
      <div className="Counter-button">
        <Counter/>
      </div> 
    </div>
  );
}

export default CounterContainer;