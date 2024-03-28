import React, { useContext } from 'react'
import { ProductContext } from '../ContextStoreData/ProductContextProvider'

const ProductTable = () => {
    const { data } = useContext(ProductContext);
    console.log(data)
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
                {
                    data.map(data => {
                        const { id, name, file_path, description, price } = data;
                        

                        return (
                            <>
                                <tbody className='align-baseline' key={id}>
                                    <tr className='group cursor-pointer hover:bg-gray-100'>
                                        <td className='table-content'>{id}</td>
                                        <td className='table-content'>{name}</td>
                                        <td className='table-content'> <img src={`${process.env.REACT_APP_API_URL}` + data.file_path} alt="" className='w-14' /></td>
                                        <td className='table-content'>{description}</td>
                                        <td className='table-content'>{price}</td>
                                        <button className='btn-send'>ADD TO CART</button>
                                    </tr>

                                </tbody>
                            </>
                        )
                    })
                }


            </table>
        </div>
    )
}

export default ProductTable