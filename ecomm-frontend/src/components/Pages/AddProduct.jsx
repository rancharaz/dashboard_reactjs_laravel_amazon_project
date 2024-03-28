import React from 'react'
import Header from '../UI/Header/Header'
import AddProductForm from '../../utils/Forms/AddProductForm'

const AddProduct = () => {
  return (
    <div >
      <Header />
      <div className="container mx-auto text-center flex justify-center items-center mt-10">
        <AddProductForm />
      </div>
    </div>
  )
}

export default AddProduct