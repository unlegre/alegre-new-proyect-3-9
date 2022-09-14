import React from 'react'
//import { products } from '../../data/products'

const Item = ({product}) => { 
const {name,price,description,stock,imgs}=product
  return (
 <div>
    <section>
    <img src={`/imagenes/${imgs.imgProduct}`} alt="" />   

    </section>
    <div>
        <h2>{name}</h2>   
        <h4>{price}</h4>
        <p>{description}</p>
        <h3>{stock}</h3>
    </div>
 </div>
  )
}

export default Item