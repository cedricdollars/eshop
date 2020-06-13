import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Proptypes from 'prop-types'

 const products = ({ data }) => {
     //console.log(data)
    return (
        <div>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/>
            </Helmet> 
            <Navbar/>
            <section className="section-indent">
                <div className="jumbotron">
                    <h1 className="text-center black title">Our catalog of products</h1>
                </div>
                <article>
                    {
                        data.allMarkdownRemark.edges.map(({node}, index) => (
                            <div key={index}>
                                <p>{node.frontmatter.title}</p>
                                <img src={node.frontmatter.image} alt="image1" />
                            </div>
                        ))
                    }
                </article>
            </section>
        </div>
    )
}
export const query = graphql`
query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/lits/"}}) {
      edges {
        node {
          frontmatter {
            image
            description
            quantity
            title
          }
        }
      }
    }
  }
  `
export default products


  