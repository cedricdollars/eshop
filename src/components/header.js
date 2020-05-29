import React from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss'
import { Icon } from 'semantic-ui-react'
import  Login  from './login'

const Header = () => {

  return(
    <header className={headerStyles.header}>
      <nav className={headerStyles.headerNav}>
        <div className={headerStyles.logo}>
          <Link to="/">
            Mobelia
          </Link>
        </div>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link to="/About">About</Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link to="/products">Products</Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
        <div>
          <ul className={headerStyles.navList}>
            <li className={headerStyles.navItem}>
              <a href="#" className="items-center snipcart-checkout">
                <Icon className="flex">
                  <Icon name="cart" className="text-white" />
                </Icon>
              </a> 
            </li>       
            <li className={headerStyles.navItem}>
              <Login />
            </li>
          </ul>
         
        </div>
      </nav>
        
    </header>
    
  )
}



export default Header
