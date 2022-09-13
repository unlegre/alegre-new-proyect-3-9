import React from 'react'
//import { products } from '../../data/products'

const Item = ({products}) => { 
const {name,price,description,imgs}=products
  return (
 <div>
    <section>
    <img src={`/imagenes/${imgs.imgProduct}`} alt="" />   // Maty esta es la ruta para ver las imagenes no me sale

    </section>
    <div>
        <h2>{name}</h2>   // y estos son los iten que quiero mostrar pero no puedo mostrar mas de uno ,con dos o mas me da error
        <h4>{price}</h4>
        <p>{description}</p>
    </div>
 </div>
  )
}

export default Item