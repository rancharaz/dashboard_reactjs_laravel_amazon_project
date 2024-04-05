import React, { useContext, useState } from 'react'
import { ProductContext } from '../HttpServiceStore/ContextStoreData/ProductContextProvider'
import { Link } from 'react-router-dom';
import { ROUTES } from '../Routes/RouterConfig';
import { notifySuccess } from '../Toasts/Toast';
import ConfirmBox from '../LoaderConfirmbox/ConfirmBox';

const ProductTable = () => {

    const { datas, deleteAction } = useContext(ProductContext);
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [deleteData, setDeleteData] = useState({});
  
    const toggleModal = (id) => {
        setModal(!modal);
        setDeleteData(id);

      };

    return (
        <div>
            <h1 className='mb-8'>Product list</h1>
            <table className="table ">
                <thead>
                    <tr>
                        <th className='table-title'>ID</th>
                        <th className='table-title'>Name</th>
                        <th className='table-title'>Image</th>
                        <th className='table-title'>Description</th>
                        <th className='table-title'>Price</th>
                        <th className='table-title'>Action</th>

                    </tr>
                </thead>
                <tbody className='align-baseline'>
                    {
                        datas && datas.map(data => {
                            const { id, name, file_path, description, price, buying_price, selling_price } = data;
                            console.log(data)
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
                                    <td className='table-content'>{buying_price}</td>
                                    <td className='table-content'>{selling_price}</td>


                                    <td> <button onClick={() => toggleModal(id)} className='btn-error'>Delete</button></td>
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
               {modal && <ConfirmBox productId={deleteData}  open={open}  closeDialog={() => setOpen(false)} />}   

            </table>
        </div>
    )
}

export default ProductTable