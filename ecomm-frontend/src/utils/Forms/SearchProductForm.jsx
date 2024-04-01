import React, { useState } from 'react'

const SearchProductForm = () => {

    const[searchDatas, setSearchDatas] = useState([]);

    async function search(key){
        console.log(key);
        let result = await fetch(`http://localhost:8000/api/search-product/`+key);
        result = await result.json();
        setSearchDatas(result)
    }

  return (
    <div>
    <div className="mt-8"></div>
    <h1>Search Product</h1>
    <div className="mb-8"></div>
    <form className="w-full">
        <div className="flex items-center mb-6 w-full">
            <div className="w-full">
                <label className="block label-text" htmlFor="inline-full-name" >
                    Name
                </label>
            </div>
            <div className="w-full">
                <input onChange={(e) => search(e.target.value)} className="input-text-search" id="inline-full-name" type="text" placeholder='Search Product' />
            </div>

        </div>
    </form>
    <div>
 
            <table className="table ">
                <thead>
                    <tr>
                        <th className='table-title'>ID</th>
                        <th className='table-title'>Name</th>
                        <th className='table-title'>Image</th>
                        <th className='table-title'>Description</th>
                        <th className='table-title'>Price</th>

                    </tr>
                </thead>
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

            </table>
        </div>
</div>
  )
}

export default SearchProductForm