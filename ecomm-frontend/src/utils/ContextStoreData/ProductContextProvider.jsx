import React, { useState, createContext, useEffect } from 'react'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {

        async function getProductList() {

            let result = await fetch(`${process.env.REACT_APP_API_PRODUCTLIST_URL}`);
            result = await result.json();
            setData(result);
        }

        getProductList()
    }, [])

    const value = { data }

    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider