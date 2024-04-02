import React from 'react'

const SearchProductFormProps = ({searchDatas}) => {
  return (
    
    <tbody className='align-baseline'>
    {
        searchDatas && searchDatas.map(data => {
            const { id, name, file_path, description, price } = data;
            return (
                <tr key={id} className='group cursor-pointer hover:bg-gray-100'>
                    <td className='table-content'>{id}</td>
                    <td className='table-content'>{name}</td>
                    <td className='table-content'> <img src={`${process.env.REACT_APP_API_URL}` + data.file_path} alt="" className='w-14' /></td>
                    <td className='table-content'>{description}</td>
                    <td className='table-content'>{price}</td>


                </tr>
            )
        })
    }
</tbody>
  )
}

export default SearchProductFormProps