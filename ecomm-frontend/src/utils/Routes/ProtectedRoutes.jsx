import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from './RouterConfig'
import  secureLocalStorage  from  "react-secure-storage";

const ProtectedRoute = () => {

    const auth = secureLocalStorage.getItem("user-info");

    return auth ? <Outlet /> : <Navigate to={ROUTES.Register} />
    /* if user true go on pages else return on register */
}

export default ProtectedRoute