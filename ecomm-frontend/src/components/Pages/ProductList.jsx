import React, { useEffect, useContext } from 'react'
import Header from '../UI/Header/Header'
import ProductTable from '../../utils/Tables/ProductTable'
import { ProductContext } from '../../utils/ContextStoreData/ProductContextProvider';

const ProductList = () => {
  /* show Products on load */
  const { getProductList } = useContext(ProductContext);

  useEffect(() => {
    getProductList()
  }, [])
  /* show Products on load */
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