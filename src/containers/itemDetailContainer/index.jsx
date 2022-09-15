import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail';
import { products } from '../../data/products';

const ItemDetailContainer = () => {
    const [productDatail, setProductDetail] = useState ({})
    // Gestionar la obtencion de la data del detalle
    useEffect(()=>{ 
        const getProducts = async()=>{
            try {
              //  const response = await fetch ()
              //  const data = await response.json();
              const productSelect =products.find (product =>product.id===1)
                setProductDetail(productSelect);
            } catch (error) {
                console.log(Error)
                
            }
        }
        getProducts();

    },[])
    console.log(productDatail);
    return <ItemDetail product={productDatail}/>
};


export default ItemDetailContainer