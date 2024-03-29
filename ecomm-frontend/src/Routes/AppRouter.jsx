import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './RouterConfig';
import AddProduct from '../components/Pages/AddProduct';
import UpdateProduct from '../components/Pages/UpdateProduct';
import LoginPage from '../components/Pages/LoginPage';
import Register from '../components/Pages/Register';
import EditProduct from '../components/Pages/EditProduct';
import ProtectedRoute from './ProtectedRoutes';
import Footer from '../components/UI/Footer/Footer';
import ProductList from '../components/Pages/ProductList';

const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route element={<ProtectedRoute/>}> {/* protected routes if login */}
          <Route path={ROUTES.AddProduct} element={<AddProduct />} />
          <Route path={`${ROUTES.UpdateProduct}/:id`} element={<UpdateProduct />} />
          <Route path={ROUTES.EditProduct} element={<EditProduct />} />
          <Route path={ROUTES.ProductList} element={<ProductList />} />

          </Route>
          <Route path={ROUTES.LoginPage} element={<LoginPage />} />
          <Route path={ROUTES.Register} element={<Register />} />
    </Routes>
    <Footer />
    </>
  )
}

export default AppRouter