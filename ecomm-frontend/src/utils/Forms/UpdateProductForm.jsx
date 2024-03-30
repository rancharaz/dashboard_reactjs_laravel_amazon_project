import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../HttpServiceStore/ContextStoreData/ProductContextProvider';

const UpdateProductForm = () => {
    const {updateProductId, updateProduct } = useContext(ProductContext);

    const params = useParams();

    const [inputValueId, setInputValueId] = useState(params.id);

    useEffect(() => {
        updateProductId(inputValueId)
    }, [])
    

  return (
    <div onLoad={() => updateProductId(inputValueId)}>
        <h1>{inputValueId}</h1>
        <h2> {updateProduct.name} </h2>
        <h2> {updateProduct.description} </h2>
        <button className='hidden' ></button>
        
    </div>
  )
}

export default UpdateProductForm