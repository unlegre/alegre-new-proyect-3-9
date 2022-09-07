import React, { useState } from 'react'
import './Counter.css'
// import {IoRemoveCircleOutline} from 'react-icons/Io';
// import {GrAddCircle} from  'react-icons/Gr';
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
  <div> 
    <div className='Counter'>
      < button onClick={decrement} > - </button>
      <p className='Counter-number'>{count}</p>
      <button onClick={increment} > + </button>
    </div> 
 
  </div>  
  );
}

export default Counter;

