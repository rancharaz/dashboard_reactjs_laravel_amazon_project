import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../HttpServiceStore/ContextStoreData/ProductContextProvider';

const UpdateProductForm = () => {
    const {
        updateProductId, 
        name, 
        price, 
        description, 
        file_path, 
        setName,
        setPrice,
        setDescription,
        setFile,
        setBuying_price,
        setSelling_price,
        handleUpdate,
        buying_price,
        selling_price
    
    } = useContext(ProductContext);

    const params = useParams();

    const [inputValueId, setInputValueId] = useState(params.id);

    useEffect(() => {
        updateProductId(inputValueId);
    }, [])

      
    return (
        <div >

            <div className="mt-8"></div>
            <h1>Update Product</h1>
            <div className="mb-8"></div>
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-full-name" >
                            Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" onChange={(e) => setName(e.target.value)}   id="inline-full-name" type="text" defaultValue={name} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-full-file" >
                            Image
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" onChange={(e) => setFile(e.target.files[0])} id="inline-full-file" type='file'/>
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
                        <textarea id="message" onChange={(e) => setDescription(e.target.value)} rows="4" className="text-area " placeholder="Write your description here..." defaultValue={description} ></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-price">
                            Price
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" onChange={(e) => setPrice(e.target.value)} id="inline-description" type="text" placeholder="Price" defaultValue={price} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-price">
                            Buying Price
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" onChange={(e) => setBuying_price(e.target.value)} id="inline-description" type="text" placeholder="Buying Price"  defaultValue={buying_price}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-price">
                            Selling Price
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" onChange={(e) => setSelling_price(e.target.value)} id="inline-description" type="text" placeholder="Selling Price"  defaultValue={selling_price}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">


                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button onClick={() => handleUpdate(inputValueId)} className="btn-send" type="button" >
                            Update Product
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default UpdateProductForm