import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
//import { useState } from 'react';
import { products } from '../../data/products';
import './styles.css';

const ItemListContainer = ({greeting}) => {

const [productos, setProductos] = useState([])//declaro estado
useEffect(()=>{//declaro el useEffect, la promesa se ejecuta una sola vez cuando se monta el componente
   // funcion autoinvocado IFE
  ( async()=>{ //es una funcion asyncrona
  //declaro new promesa
    const obtenerProducts = new Promise((accept,reject)=>{ //declaro la promesa
      setTimeout(()=>{
        accept(products)
      },3000); // se crea el setTimeout
    })
 
    try {
      const productos = await obtenerProducts;
      setProductos(productos)  //setiamos los productos en un estado para que permanesca y no se borre
    } catch (error) {
      console.log(error);  
    }
  })() 

},[])

  console.log(productos);
  return (
    <div className = 'Item-List-Container'>
    <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer;
