import React, { useContext } from 'react'
import { ProductContext } from '../ContextStoreData/ProductContextProvider'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Routes/RouterConfig';
import { notifySuccess } from '../Toasts/Toast';

const ProductTable = () => {

    const { datas, deleteAction } = useContext(ProductContext);


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
                            const { id, name, file_path, description, price } = data;
                                return (
                                    <tr key={id} className='group cursor-pointer hover:bg-gray-100'>
                                        <td className='table-content'>{id}</td>
                                        <td className='table-content'>{name}</td>
                                        <td className='table-content'> <img src={`${process.env.REACT_APP_API_URL}` + data.file_path} alt="" className='w-14' /></td>
                                        <td className='table-content'>{description}</td>
                                        <td className='table-content'>{price}</td>
                                        <td> <button onClick={() => deleteAction(id)} className='btn-error'>Delete</button></td>
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

            </table>
        </div>
    )
}

export default ProductTable