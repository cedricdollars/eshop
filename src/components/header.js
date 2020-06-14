import React from "react"
import headerStyles from './header.module.scss'
import Navbar from './navbar'
import { graphql } from 'gatsby'


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

export const query = graphql`
query  {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/carousel/"}}) {
    edges {
      node {
        frontmatter {
          image
          path
        }
      }
    }
  }
}
`

export default Header
