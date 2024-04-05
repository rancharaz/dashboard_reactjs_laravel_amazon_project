import React, {useState}from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../Routes/RouterConfig';
import ConfirmBox from '../LoaderConfirmbox/ConfirmBox';

const TableListProps = ({ datas}) => {

    
    const [modal, setModal] = useState(false);
    const [deleteData, setDeleteData] = useState({});
  
    const toggleModal = () => {
        setModal(!modal);
        console.log(true)
      };

    return (
        <tbody className='align-baseline'>
            {
                datas && datas.map(data => {
                    const { id, name , description, price, buying_price, selling_price } = data;
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
                            <td className='table-content'>{selling_price}</td>
                            <td> <button onClick={toggleModal}   className='btn-error'>Delete</button></td>
                            <td>
                                <Link to={`${ROUTES.UpdateProduct}/${id}`}>
                                    <button className='btn-success'>Update</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })
                
            }

                <ConfirmBox />
        
        </tbody>
    )
}

export default TableListProps