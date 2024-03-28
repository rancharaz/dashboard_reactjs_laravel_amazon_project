import React, {useState} from 'react'
import axios from 'axios';
import { notifyError, notifySuccess } from '../Toasts/Toast';


const AddProductForm = () => {


    const[name, setName] = useState("");
    const[file, setFile] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");
    

    async function addProduct() {

            const formData = new FormData();
            formData.append("file", file);
            formData.append("name", name);
            formData.append("price", price);
            formData.append("description", description);

            let result = await axios.post(`${process.env.REACT_APP_API_ADD_LINK}`, formData)
            .then(response => {
                notifySuccess("Data has been saved");
            })
            .catch((error) => {
                notifyError("Data has not been saved",error);
            })

        }

  return (
    <div>
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
                <input className="input-text" id="inline-full-name" type="text"  onChange={(e) => setName(e.target.value)}/>
            </div>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <label className="block label-text" htmlFor="inline-full-file" >
                    Image
                </label>
            </div>
            <div className="md:w-2/3">
                <input className="input-text" id="inline-full-file" type="file" onChange={(e) => setFile(e.target.files[0])}/>
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
                <input className="input-text" id="inline-description" type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)}  />
            </div>
        </div>
        <div className="md:flex md:items-center mb-6">


        </div>
        <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
                <button className="btn-send" type="button" onClick={addProduct}>
                    Add Product
                </button>
            </div>
        </div>
    </form>
</div>
  )
}

export default AddProductForm