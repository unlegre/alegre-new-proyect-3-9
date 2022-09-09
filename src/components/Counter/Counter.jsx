import React, { useState } from 'react'
import './Counter.css'
import {IoMdRemoveCircleOutline} from 'react-icons/io';
import {GrAddCircle} from  'react-icons/gr';
// importo button
//import ResetButton from "./ResetButton/ResetButton.jsx";


const Counter = () => {
  const [count,setCount]=useState(1);

  const increment =()=>{

    setCount(count+1);
  }
  const decrement=()=>{
    if(count > 1){
      setCount(count-1);
    }
  
  }
 /* const reset=()=>{
    setCount(1);
  }*/

  return (
  <div className='Counter-counteiner'> 
    <div className='Counter'>
      <button className='Couter-icon' onClick={increment} > < GrAddCircle /> </button>
      <p className='Counter-number'>{count}</p>
      < button className='Couter-icon' onClick={decrement} > <IoMdRemoveCircleOutline /> </button>
    </div> 
  </div>  
  );
}

export default Counter;

