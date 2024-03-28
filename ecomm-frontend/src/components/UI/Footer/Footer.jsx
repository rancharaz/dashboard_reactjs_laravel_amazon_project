import React from 'react'
import { Link } from 'react-router-dom';
import { MENULIST } from '../../../utils/ListConfigItems/MenuListConfig';
import { ROUTES } from '../../../Routes/RouterConfig';



const Footer = () => {



  return (
    <>
      <footer className='footer'>
        <div className="logo-footer" >
          LOGO
        </div>
        <div className="menu-footer">
          <ul className='flex gap-6'>
            {/* add your menu */}
            <Link><p>© copyright Ranveer Ancharaz</p></Link>
          </ul>
        </div>
      </footer>
    </>
  )
}
export default Footer