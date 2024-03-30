import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from './RouterConfig'

const ProtectedRoute = () => {

    const auth = localStorage.getItem("user-info");
    /* if user true go on pages else return on register */
    return auth ? <Outlet /> : <Navigate to={ROUTES.Register} />

}

export default ProtectedRoute