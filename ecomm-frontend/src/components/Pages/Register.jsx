import React from 'react'
import RegisterForm from '../../utils/Forms/RegisterForm'
import Header from '../UI/Header/Header'

const Register = () => {
  return (
    <div >
      <Header />
      <div className="container mx-auto text-center flex justify-center items-center mt-10 h-screen">
    <RegisterForm />
    </div>
    </div>
  )
}

export default Register