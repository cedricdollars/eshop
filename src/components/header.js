import React from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss'
import { Button, Icon, ButtonContent } from 'semantic-ui-react'
import logo from '../images/logo.png'
import Navbar from './navbar'
import { Carousel } from 'react-bootstrap'
import  Login  from './login'

const Header = () => {

  return(
    <header className={headerStyles.header}>
      <Navbar />
      <div>
        <h1 className={headerStyles.title}>
          <strong>Heureux de vous </strong><br/>
          <strong>revoir !</strong>
        </h1>
        <p className={headerStyles.description}>
          Faites vos magazins en toute sécurité <br />
          Profitez des 15 % de réduction sur tous nos produits dès  Vendredi 19 Juin pendant 20 jours
        </p>
        <button className={headerStyles.button}>
          Découvrir nos produits
        </button>
      </div>
    </header>
  
    
  )
}



export default Header
