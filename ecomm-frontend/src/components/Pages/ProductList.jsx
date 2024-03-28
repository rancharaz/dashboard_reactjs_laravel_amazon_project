import React from 'react'
import Header from '../UI/Header/Header'
import ProductTable from '../../utils/Tables/ProductTable'

const ProductList = () => {

  return (
    <div >
      <Header />
      <div className="container mx-auto text-center   justify-center items-center mt-10">
        <ProductTable />
    </div>
    </div>
  )
}

export default ProductList