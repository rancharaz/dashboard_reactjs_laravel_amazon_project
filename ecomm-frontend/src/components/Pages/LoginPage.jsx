import React, { useEffect } from 'react'
import Header from '../UI/Header/Header'
import { useNavigate } from "react-router-dom"
import LoginForm from '../../utils/Forms/LoginForm';

const LoginPage = () => {

  return (
    <div >
      <Header />
      <div className="container mx-auto text-center flex justify-center items-center mt-10 h-screen">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage