import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../HttpServiceStore/ContextStoreData/ProductContextProvider';

const UpdateProductForm = () => {
    const {
        updateProductId,
 /*        handleUpdate, */
        name,
        price,
        description,
        file_path
    } = useContext(ProductContext);

    const params = useParams();

    const [inputValueId, setInputValueId] = useState(params.id);

    useEffect(() => {
        updateProductId(inputValueId);
    }, [])


/*     useEffect(() => {
        handleUpdate(inputValueId)
    }) */

    const handleUpdate = async () => {
        let data = {name, price,description, file_path};/* destructure */
            console.log("DATA", data)
        let result = await fetch(`${process.env.REACT_APP_API_PRODUCT_VALUE}/${params.id}`, {
          method: "put",
          mode: "cors",
          body: JSON.stringify(data),
          headers: {
            /* adding bearer to token to adjust to backend */
            authorization: `brearer ${JSON.parse(localStorage.getItem('token'))}`,
             'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
            'Access-Control-Allow-Methods': '*',
            "Content-Type": "application/json"
        }
        }).catch(function(error){
          console.log(error.message)
        })
        result = await result.json();
        alert(`Product ${params.id} updated`);
         
      
      }
      
    return (
        <div >

            <div className="mt-8"></div>
            <h1>Add Product</h1>
            <div className="mb-8"></div>
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-full-name" >
                            Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-full-name" type="text" value={description} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-full-file" >
                            Image
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-full-file" type='file'/>
                    </div>
                    <img src={`${process.env.REACT_APP_API_URL}${file_path}`} alt="" className='w-14' />
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-description">
                            Description
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea id="message" rows="4" className="text-area " placeholder="Write your description here..." value={description} ></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-price">
                            Price
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-description" type="text" placeholder="Price" value={price} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">


                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button onClick={handleUpdate} className="btn-send" type="button" >
                            Add Product
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default UpdateProductForm