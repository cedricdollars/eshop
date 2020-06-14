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
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.15/default/snipcart.css" />
                <div hidden id="snipcart" data-api-key="YzY1Yzk5ODAtMWRkMy00ZTI2LTg1ZmEtMWI0ZTljZWFmYTMzNjM3MjU4NjI3NTM3Mzk4MzE5"></div>
                <script src="https://cdn.snipcart.com/themes/v3.0.15/default/snipcart.js"></script>
            </Helmet> 
            <Navbar/>
            <section className="section">
                <div className="jumbotron">
                    <h1 className="text-center  title-black">Tous nos produits</h1>
                </div>
                
                <article className="container">  
                    <div className="row">     
                    {
                        data.allMarkdownRemark.edges.map(({node}, index) => (
                            <div className="img-product col-xl-3" key={index}>
                                <strong>{node.frontmatter.title}</strong>
                                <img src={node.frontmatter.image} alt="image1" />
                                <p>prix : {node.frontmatter.price} € </p>
                                <button 
                                className="btn btn-btn-outline-dark bg-black focus:outline-none text-white snipcart-add-item"
                                data-item-id={node.id}
                                data-item-price={node.frontmatter.price}
                                data-item-image={node.frontmatter.image}
                                data-item-name={node.frontmatter.title}
                                data-item-description={node.frontmatter.description}
                                data-item-url={"https://eshop-mobelia.netlify.app/" + node.frontmatter.path}
                                ><Icon name="add to cart"></Icon> Ajouter au panier</button>
                            </div>
                        ))
                        
                    }
                    
                    </div>
                </article>
            </section>
            <div className="mt-5">

            </div>
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
            path
          }
        }
      }
    }
  }
`

   
export default products


  