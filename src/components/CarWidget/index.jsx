import React from 'react';
import {HiShoppingCart} from 'react-icons/hi';


const CartWidget = () => {
  return (
    <div  style={{
        width: '90px'

    }}>
      < HiShoppingCart clasName="carrito"/>
    </div>

  )
}

export default CartWidget;