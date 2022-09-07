import React, { useState } from 'react'
import './Counter.css'
//import {HiShoppingCart} from 'react-icons/hi';
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
  <div> 
    <div className='Counter'>
      <button onClick={increment} > < GrAddCircle/> </button>
      <p className='Counter-number'>{count}</p>
      < button onClick={decrement} >  <IoMdRemoveCircleOutline/> </button>
     
      
    </div> 
 
  </div>  
  );
}

export default Counter;

