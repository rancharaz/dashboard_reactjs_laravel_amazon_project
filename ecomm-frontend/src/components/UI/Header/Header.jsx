import React from 'react'
import { Link } from 'react-router-dom';
import { MENULIST } from '../../../utils/ListConfigItems/MenuListConfig';
import { ROUTES } from '../../../utils/Routes/RouterConfig';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const user = JSON.parse(localStorage.getItem('user-info'));
  let navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate(`${ROUTES.Register}`)
  }

  return (
    <>
      <header className='header-content'>
        <div className="header-container">
          <div className="logo">
            LOGO
          </div>
          <div className="menu ">
            <ul className='flex gap-6'>
              {/* if userinfo true show add and update page else show login... */}
              {
                localStorage.getItem('user-info') ?
                  <>
                    <Link to={ROUTES.ProductList}>{MENULIST.ProductList}</Link>
                    <Link to={ROUTES.AddProduct}>{MENULIST.AddProduct}</Link>

                    <Link to={ROUTES.SearchProduct}>{MENULIST.SearchProduct}</Link>

                    <Link>Username: {user.name}</Link>
                    <Link to={ROUTES.Register} onClick={logout}>{MENULIST.Logout}</Link>

                  </>
                  :

                  <>
                    <Link to={ROUTES.LoginPage}>{MENULIST.LoginPage}</Link>
                    <Link to={ROUTES.Register}>{MENULIST.Register}</Link>

                  </>
              }

            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header