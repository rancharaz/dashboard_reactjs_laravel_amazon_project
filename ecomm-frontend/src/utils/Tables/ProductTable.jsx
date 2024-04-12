/* eslint-disable no-lone-blocks */
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../HttpServiceStore/ContextStoreData/ProductContextProvider'
import { Link } from 'react-router-dom';
import { ROUTES } from '../Routes/RouterConfig';
import { createPortal } from "react-dom";
import { Modal } from '../LoaderModal/Modal';
import secureLocalStorage from "react-secure-storage";

const ProductTable = () => {

    const { datas, deleteAction, joinDatas } = useContext(ProductContext);
    const [modal, setModal] = useState(false);
    const [deleteData, setDeleteData] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    let user = JSON.parse(secureLocalStorage.getItem('user-auth'));
    /*     let dataUsers = JSON.stringify(joinDatas); */

    /* let mixDatas = JSON.stringify(joinDatas) */




    const toggleModal = (id) => {
        setDeleteData(id);

    };
    const handleButtonClick = (value) => {
        setModalOpen(false);
        setMessage(value);
    };







    return (

        <div>

            <h2>




            </h2>
            <h1 className='mb-8'>Product list</h1>
            <table className="table ">
                <thead>
                    <tr>
                        <th className='table-title'>ID</th>
                        <th className='table-title'>Name</th>
                        <th className='table-title'>Image</th>
                        <th className='table-title'>Description</th>
                        <th className='table-title'>Price</th>
                        <th className='table-title'>Buying Price</th>
                        <th className='table-title'>Selling Price</th>
                        <th className='table-title'>Action</th>
                        <th className='table-title'></th>

                    </tr>
                </thead>
                <tbody className='align-baseline'>
                    {
                        datas && datas.map(data => {
                            const { id, name, file_path, description, price, buying_price, selling_price } = data;

/*                             return (

                                <>

                                    {(() => {
                                        switch (user.data.id) {
                                            case id:
                                                return <> 
                                                    <h1> id : {id}</h1>
                                                    <h1> name : {name}</h1>
                                                    <h1> description : {description}</h1>
                                                    <h1> price : {price}</h1>
                                                    <h1> buying price : {buying_price}</h1>
                                                    <h1> selling price : {selling_price}</h1>

                                                 </>
 
                                            default:
                                                return null
                                        }
                                    })()}
                                </>
                            ) */





                                                        return (
                                                            <tr key={id} className='group cursor-pointer hover:bg-gray-100'>
                                                                <td className='table-content'>{id}</td>
                                                                <td className='table-content'>{name}</td>
                                                                <td className='table-content'>
                                                                    <Link to={`${process.env.REACT_APP_API_URL}` + data.file_path} target='_blank'>
                                                                        <img src={`${process.env.REACT_APP_API_URL}` + data.file_path} alt="" className='w-14' />
                                                                    </Link>
                                                                </td>
                                                                <td className='table-content'>{description}</td>
                                                                <td className='table-content'>{price}</td>
                                                                <td className='table-content'>{buying_price}</td>
                                                                <td className='table-content'>{selling_price}</td>
                                                                <td> 
                                                                <button onClick={() => {{
                                                                     setModalOpen(true)
                                                                     toggleModal(id)
                                                                }}} className='btn-error'>Delete</button>
                                                                </td>
                                                                <td>
                                                                    <Link to={`${ROUTES.UpdateProduct}/${id}`}>
                                                                        <button className='btn-success'>Update</button>
                                                                    </Link>
                                                                </td>
                            
                                                            </tr>
                                                        )
                        })

                    }
                </tbody>
                <>
                    {message}

                    {modalOpen &&
                        createPortal(
                            <Modal
                                productId={deleteData}
                                closeModal={handleButtonClick}
                                onSubmit={handleButtonClick}
                                onCancel={handleButtonClick}
                            >

                            </Modal>,
                            document.body
                        )}
                </>
            </table>
        </div>
    )
}

export default ProductTable