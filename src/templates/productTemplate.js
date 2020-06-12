/* import React from 'react'
import { graphql, Link } from "gatsby"


export const query = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: {path: {eq:$path}}) {
            frontmatter {
                title
                image
                path
                description
                price
                quantity
                category
                review
                thc
                cbd
                percent
                effect
                aroma
            }
        }
    }
`
const ProductTemplate = () => {
    return (
        <div>
            
        </div>
    )
}
 */