import React from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss'

const Header = () => {


  return(
    <header className={headerStyles.header}>
      <nav className={headerStyles.headerNav}>
        <div className={headerStyles.title}>
          <Link to="/">
            Mobilia
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
              <Link to="/account">Account</Link>
            </li>
            <li className={headerStyles.navItem}>
              <Link to="/card">Card</Link>
            </li>
          </ul>
         
        </div>
      </nav>
        
    </header>
    
  )
}



export default Header
