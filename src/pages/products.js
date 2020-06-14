import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Proptypes from 'prop-types'
import '../components/styles/style.scss'
import Footer from '../components/footer'



 const products = ({ data }) => {

     //console.log(data)
    return (
        <div>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
                <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0"></script>
            </Helmet> 
            <Navbar/>
            <section className="section">
                <div className="jumbotron">
                    <h1 className="text-center  title-black">Tous nos produits</h1>
                </div>
                {/* <div className="form-inline">
                        <input 
                            type="text" 
                            name="search" 
                            placeholder="rechercher un produit" 
                            className="form-control"
                            onChange={handleSearch}
                        />
                        <button 
                            type="submit" 
                            className="btn btn-outline-dark"
                            onClick={Search}
                        >   Rechercher
                        </button>
                </div> */}
                <article className="container">
                    
                    <div className="row">
                        
                        {
                            data.allMarkdownRemark.edges.map(({node}, index) => (
                                <div className="img-product col-xl-3" key={index}>
                                    <strong>{node.frontmatter.title}</strong>
                                    <img src={node.frontmatter.image} alt="image1" />
                                    
                                    <p>prix : {node.frontmatter.price} € </p>
                                    <button className="btn-add-cart" >Ajouter au panier</button>
                                </div>
                            ))
                        }
                    </div>
                </article>
            </section>
            <Footer />
        </div>
    )
}
export const query = graphql`
query  {
 allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
    edges {
      node {
        frontmatter {
          image
          description
          quantity
          title
          price
        }
      }
    }
  }
}
`

   
export default products


  