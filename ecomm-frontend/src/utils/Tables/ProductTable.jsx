import React, { useContext } from 'react'
import { ProductContext } from '../HttpServiceStore/ContextStoreData/ProductContextProvider'
import { Link } from 'react-router-dom';
import { ROUTES } from '../Routes/RouterConfig';
import { notifySuccess } from '../Toasts/Toast';
import TableListProps from '../FormsProps/TableListProps';

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
                        <th className='table-title'>Buying Price</th>
                        <th className='table-title'>Selling Price</th>
                        <th className='table-title'>Actions</th>
                        <th className='table-title'></th>
                    </tr>
                </thead>
               
                    <TableListProps datas={datas} deleteAction={deleteAction}/>
               

            </table>
        </div>
    )
}

export default ProductTable