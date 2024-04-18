import React, { useState, createContext, useEffect } from 'react'
import { notifyError, notifySuccess } from '../../Toasts/Toast';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import secureLocalStorage from "react-secure-storage";


export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const [datas, setData] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [buying_price, setBuying_price] = useState("");
    const [selling_price, setSelling_price] = useState("");
 

    const [description, setDescription] = useState("");
    const [file_path, setFile] = useState();
    let navigate = useNavigate();

    const [searchDatas, setSearchDatas] = useState([]);
    const [joinDatas, setJoinDatas] = useState();

    const params = useParams();

    /* function launch */
    useEffect(() => {
        getProductList()

    }, [])

    useEffect(() => {
        updateProductId()
 
    }, [])



 

    /* user */
    let user = JSON.parse(secureLocalStorage.getItem('user-info'));
 
  
    useEffect(() => {
        if (!user) {
            navigate("/register")
        }
    }, [])


    /* get Data function */
    async function getProductList() {
        let result = await fetch(`${process.env.REACT_APP_API_PRODUCTLIST_URL}`);
        result = await result.json();
        setData(result);
    }



    /* add product  */
    async function addProduct(user_id) {
        console.log("testage",user_id)
        const formData = new FormData();
        formData.append("user_id", user_id);
        formData.append("file", file_path);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("buying_price", buying_price);
        formData.append("selling_price", selling_price);
        formData.append("description", description);

        let result = await axios.post(`${process.env.REACT_APP_API_ADD_LINK}`, formData)
            .then(response => {
                notifySuccess("Data has been saved");
            })
            .catch((error) => {
                notifyError("Data has not been saved", error);
            })

    }



    /* delete by id function */
    async function deleteAction(id) {
        let result = await fetch(`${process.env.REACT_APP_API_DELETE_PRODUCT}/` + id, {
            method: "delete"
        })
        result = await result.json();
        notifyError(`Product has been deleted.`)
        getProductList()
    }



    /* get update product by id to be updated */
    async function updateProductId(inputValueId) {
        let result = await fetch(`${process.env.REACT_APP_API_PRODUCT_VALUE}/${inputValueId}`);
        result = await result.json()
        setName(result.name)
        setPrice(result.price);
        setDescription(result.description)
        setFile(result.file_path)
        setSelling_price(result.selling_price)
        setBuying_price(result.buying_price)

        console.log("result", result)
        console.log(file_path)
    }



    /* updated function */
    async function handleUpdate(inputValueId) {
        console.log("sell",selling_price)
        let data = { name, price, description, file_path, buying_price, selling_price};/* destructure */

        let result = await fetch(`http://localhost:8000/api/product/${inputValueId}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
                "Content-Type": "application/json"
            }
        }).catch(function (error) {
            console.log(error.message)
        })
        result = await result.json();
        notifySuccess(`Product id: ${result.id} and Name: ${result.name} updated`);

    }


    /* search by key */
    async function search(key) {
        console.log(key);
        let result = await fetch(`http://localhost:8000/api/search-product/` + key);
        result = await result.json();
        setSearchDatas(result)
    }

 

    /* variable to export */
    const value = {
        datas,
        deleteAction,
        getProductList,
        updateProductId,
        setName,
        setPrice,
        setDescription,
        setFile,
        handleUpdate,
        name,
        price,
        description,
        file_path,
        searchDatas,
        buying_price,
        selling_price,
        setBuying_price,
        setSelling_price,
        setSearchDatas,
        search,
        addProduct,
 

    }
    /* return value */
    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider