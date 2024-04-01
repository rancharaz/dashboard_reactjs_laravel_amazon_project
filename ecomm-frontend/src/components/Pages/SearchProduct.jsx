import React from 'react'
import SearchProductForm from '../../utils/Forms/SearchProductForm'
import Header from '../UI/Header/Header'

const SearchProduct = () => {
  return (
<div>
    <Header />
      <div className="container mx-auto text-center flex justify-center items-center mt-10">
   <SearchProductForm />
    </div>
    </div>
  )
}

export default SearchProduct