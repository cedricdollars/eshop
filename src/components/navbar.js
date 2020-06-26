import React from 'react'
import { Link } from "gatsby"
import { Button, Icon } from 'semantic-ui-react'
import headerStyles from './header.module.scss'
import logo from '../images/logo.png'
import Login from '../components/login'


 const Navbar = () => {
    
    return (
       <> 
        <nav className={headerStyles.headerNav}>
            <div className={headerStyles.logo}>
                <Link to="/">
                    <img src={logo} alt="Mon logo" />
                </Link>
            </div>
            <ul className={headerStyles.navList}>
                <li className={headerStyles.navItem}>
                    <Link activeClassName={headerStyles.active}  to="/">Home</Link>
                </li>
                <li className={headerStyles.navItem}>
                    <Link activeClassName={headerStyles.active} to="/about">About</Link>
                </li>
                <li className={headerStyles.navItem}>
                    <Link activeClassName={headerStyles.active}  to="/blog">Blog</Link>
                </li>
                <li className={headerStyles.navItem}>
                    <Link activeClassName={headerStyles.active}  to="/products">Products</Link>
                </li>
                <li className={headerStyles.navItem}>
                    <Link activeClassName={headerStyles.active}  to="/contact">Contact</Link>
                </li>
                
            </ul>
            <ul className={headerStyles.navList}>
                <li className={headerStyles.navItem}>
                    <Link to='/checkout'><Icon name="cart"/></Link>
                </li>
                
                <li className='login'>
                    <Login/>
                </li>
            </ul>
        </nav>
           
         </>
    )
}
export default Navbar