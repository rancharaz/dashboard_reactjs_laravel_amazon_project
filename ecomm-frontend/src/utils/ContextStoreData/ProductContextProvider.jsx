import React, { useState, createContext, useEffect } from 'react'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const [datas, setData] = useState([])

  
    useEffect(() => {
        getProductList()
      
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
          let result =  await fetch(`http://localhost:8000/api/delete-product/`+id, {
                method: "delete"
            });
            result =  await result.json();
            getProductList()
    }
    /*  */





    /* variable to export */
    const value = { datas, deleteAction, getProductList}

    /* return value */
    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider