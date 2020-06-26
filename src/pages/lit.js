import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

 const Lit = ({data}) => {
    return (
        <>
            <Helmet>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.4/dist/css/uikit.min.css" />

            {/* UIkit Js */}
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.4/dist/js/uikit.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.4/dist/js/uikit-icons.min.js"></script>
            </Helmet>

            <div className="container">
                <div className="section">
                    <article className="uk-article">
                        <div className="uk-container">
                            <h3>Title of articles</h3>

                            <div className="uk-grid-match uk-child-width-1-3@m" uk-grid>
                                <div>
                                    lorem ipssumm e
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export const query = graphql` 
query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/lits/"}}) {
      edges {
        node {
          id
          frontmatter {
            image
            price
            title
            date(formatString: "dddd DD MMMM YYYY", fromNow: true)
          }
        }
      }
    }
  }
  
` 
export default Lit