import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import '../components/styles/style.scss'
import Footer from '../components/footer'
import { Icon } from 'semantic-ui-react'


 const products = ({ data }) => {

     //console.log(data)
    return (
        <div>
            <Helmet>
                
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
                                <button 
                                className="btn btn-btn-outline-dark bg-black focus:outline-none text-white"
                                data-item-id={node.id}
                                data-item-price={node.frontmatter.price}
                                data-item-image={node.frontmatter.image}
                                data-item-name={node.frontmatter.title}
                                data-item-description={node.frontmatter.description}
                                data-item-url={"https://eshop-mobelia.netlify.app" + node.frontmatter.path}
                                ><Icon name="add to cart"></Icon> Ajouter au panier</button>
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
query queryProducts {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
      edges {
        node {
          id
          frontmatter {
            image
            price
            title
            quantity
          }
        }
      }
    }
  }
  
`

   
export default products


  