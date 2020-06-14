import React from 'react'
import Navbar from '../components/navbar'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import '../components/styles/style.scss'
import Footer from '../components/footer'

 const Blog = () => {


    return (
        <div>
             <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/>
            </Helmet>
            <Navbar />
             <main>
                 <div className="jumbotron">
                    <h1 className="text-center title-black">
                        Blog
                    </h1>
                 </div>
                 <div className="container">
                     <aside>

                     </aside>
                 </div>
             </main>  
             <Footer/>      
        </div>
        
    )
}

export const query = graphql`
query  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blogs/"}}) {
       edges {
         node {
           frontmatter {
             image
             description
             title
           }
         }
       }
     }
   }
`


export default Blog