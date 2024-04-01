import React, { useState, createContext, useEffect } from 'react'
import { notifyError, notifySuccess } from '../../Toasts/Toast';
import { useParams } from 'react-router-dom'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const [datas, setData] = useState([])
 /*    const [updateProduct, setUpdateProduct] = useState([]); */
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file_path, setFile] = useState();
    const params = useParams();


    useEffect(() => {
        getProductList()
      
    }, [])
 
    useEffect(() => {
        updateProductId()
      
    }, [])
 
 
    /* get Data function */
    async function getProductList() {
        let result = await fetch(`${process.env.REACT_APP_API_PRODUCTLIST_URL}`);
        result = await result.json();
        setData(result);
    }
    /*  */


    /* delete by id function */
    async function deleteAction(id) {

          let result =  await fetch(`${process.env.REACT_APP_API_DELETE_PRODUCT}/`+id, {
                method: "delete"
            });
            result =  await result.json();
            console.log(result)
            notifyError()
            getProductList()
    }
    /*  */

    /* get update product by id to be updated */
    async function updateProductId(inputValueId){
        let result = await fetch(`${process.env.REACT_APP_API_PRODUCT_VALUE}/${inputValueId}`);
            result = await result.json()
            setName(result.name)
            setPrice(result.price);
            setDescription(result.description)
            setFile(result.file_path)
            console.log("result", result)
            console.log(file_path)
    }


    /* updated function */


 




    /* variable to export */
    const value = { 
        datas, 
        deleteAction, 
        getProductList,
        updateProductId,
 
        name,
        price,
        description,
        file_path
    }

    /* return value */
    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider