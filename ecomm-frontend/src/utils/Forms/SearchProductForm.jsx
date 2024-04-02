import React, { useContext } from 'react'
import { ProductContext } from '../HttpServiceStore/ContextStoreData/ProductContextProvider';
import SearchProductFormProps from '../FormsProps/SearchProductFormProps';

const SearchProductForm = () => {

    const { search, searchDatas } = useContext(ProductContext);

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
                   <SearchProductFormProps searchDatas={searchDatas} />
                </table>
            </div>
        </div>
    )
}

export default SearchProductForm