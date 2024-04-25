import React, { useContext } from 'react'
import { ProductContext } from '../HttpServiceStore/ContextStoreData/ProductContextProvider';
import secureLocalStorage from "react-secure-storage";


const AddProductForm = () => {

    let user = JSON.parse(secureLocalStorage.getItem('user-auth'));
    let user_id = user.user.id;

    const { addProduct, setName, setPrice, setDescription, setFile, setBuying_price,
        setSelling_price } = useContext(ProductContext);

    

    return (
        <div>
            <div className="mt-8"></div>
            <h1>Add Product</h1>
            <div className="mb-8"></div>
            <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-full-name" >
                            User ID
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-full-name" type="text" value={user_id}    disabled />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-full-name" >
                            Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-full-name" type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-full-file" >
                            Image
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-full-file" type="file" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-description">
                            Description
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea id="message" rows="4" className="text-area " placeholder="Write your description here..." onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-price">
                            Price
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-description" type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-price">
                            Buying Price
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-description" type="text" placeholder="Buying Price" onChange={(e) => setBuying_price(e.target.value)} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-price">
                            Selling Price
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-description" type="text" placeholder="Selling Price" onChange={(e) => setSelling_price(e.target.value)} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">


                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="btn-send" type="button" onClick={() => addProduct(user_id)}>
                            Add Product
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProductForm