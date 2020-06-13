import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import './styles/style.scss'

 const Lit = ({data}) => {
    
    return (
        <div>
             <section className="section section-grid"> 
                <div className="lits">
                    <StaticQuery query={query} render={(data) => (
                        <article>
                            {
                                data.allMarkdownRemark.edges.map(({node}, index) => (
                                    <div key={index}>
                                        <p className="description">{node.frontmatter.title}</p>
                                        <img src={node.frontmatter.image} alt="image1" />
                                    </div>
                                ))
                            }
                        </article>
                    )} />
                </div> 
            </section>
        </div>
    )
}
export const query = graphql`
query  {
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
export default Lit