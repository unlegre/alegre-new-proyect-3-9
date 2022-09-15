import React from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h1>{product.name}</h1>
        {/*<img src={`/imagenes/${imgs.imgProduct}`} alt="" /> */}
        <Counter/>

    </div>
  )
}

export default ItemDetail