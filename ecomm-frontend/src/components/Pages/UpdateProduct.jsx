import React from 'react'
import Header from '../UI/Header/Header'
import UpdateProductForm from '../../utils/Forms/UpdateProductForm'

const UpdateProduct = () => {

  return (
    <div >
    <Header />
    <div className="container mx-auto text-center flex justify-center items-center mt-10">
      <UpdateProductForm />
    </div>
  </div>
  )
}

export default UpdateProduct