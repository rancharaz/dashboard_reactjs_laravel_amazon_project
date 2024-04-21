/* eslint-disable no-lone-blocks */
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../HttpServiceStore/ContextStoreData/ProductContextProvider'
import { Link } from 'react-router-dom';
import { ROUTES } from '../Routes/RouterConfig';
import { createPortal } from "react-dom";
import { Modal } from '../LoaderModal/Modal';
import secureLocalStorage from "react-secure-storage";

const ProductTable = () => {

    const { datas, deleteAction, } = useContext(ProductContext);
    const [modal, setModal] = useState(false);
    const [deleteData, setDeleteData] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [userProducts, setUserProducts] = useState([]);

    let user = JSON.parse(secureLocalStorage.getItem('user-info'));
    /*     let dataUsers = JSON.stringify(joinDatas); */

    /* let mixDatas = JSON.stringify(joinDatas) */


    console.log("UserID", user.id)


    const toggleModal = (id) => {
        setDeleteData(id);

    };
    const handleButtonClick = (value) => {
        setModalOpen(false);
        setMessage(value);
    };

    async function getData() {
        let result = await fetch(`http://localhost:8000/api/data-user`);
        result = await result.json();
        setUserProducts(result);
        console.log("RESULT", result)

    }

    useEffect(() => {
        getData()
    }, [])


    return (

        <div>
            <h1 className='mb-8'>Product list    </h1>
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
                        userProducts && userProducts.map(data => {
                            const { id, name, email } = data;

                            return (

                                <>
                                    {(() => {
                                        switch (user.id) {
                                            case id:
                                                return <>


                                                    <h1> {data.product.map(item => {
                                                        return (
                                                            <>
                                                                <tr key={id} className='group cursor-pointer hover:bg-gray-100'>
                                                                    <td className='table-content'>{item.id}</td>
                                                                    <td className='table-content'>{item.name}</td>
                                                                    <td className='table-content'>
                                                                        <Link to={`${process.env.REACT_APP_API_URL}` + item.file_path} target='_blank'>
                                                                            <img src={`${process.env.REACT_APP_API_URL}` + item.file_path} alt="" className='w-14' />
                                                                        </Link>
                                                                    </td>
                                                                    <td className='table-content'>{item.description}</td>
                                                                    <td className='table-content'>{item.price}</td>
                                                                    <td className='table-content'>{item.buying_price}</td>
                                                                    <td className='table-content'>{item.selling_price}</td>
                                                                    <td>
                                                                        <button onClick={() => {
                                                                            {
                                                                                setModalOpen(true)
                                                                                toggleModal(item.id)
                                                                            }
                                                                        }} className='btn-error'>Delete</button>
                                                                    </td>
                                                                    <td>
                                                                        <Link to={`${ROUTES.UpdateProduct}/${item.id}`}>
                                                                            <button className='btn-success'>Update</button>
                                                                        </Link>
                                                                    </td>

                                                                </tr>

                                                            </>

                                                        )
                                                    })}</h1>

                                                </>
                                            default:
                                                return null
                                        }
                                    })()}
                                </>
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