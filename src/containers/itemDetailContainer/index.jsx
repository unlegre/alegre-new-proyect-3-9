import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ItemDetailContainer = () => {
    const [productDatail, setProductDetail] = useState ({})
    // Gestionar la obtencion de la data del detalle
    useEffect(()=>{ 
        const getProducts = async()=>{
            try {
                const response = await fetch ()
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(Error)
                
            }
        }
        getProducts();

    },[])
    console.log(productDatail);
  
};
return <div> Product Detail</div>

export default ItemDetailContainer