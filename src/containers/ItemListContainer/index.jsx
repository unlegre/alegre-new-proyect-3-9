import React from 'react';
import './styles.css';

const ItemListContainer = ({greeting}) => {
  return (
    <div className = 'Item-List-Container'>
      <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer;
