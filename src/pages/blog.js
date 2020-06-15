import React from 'react'
import Navbar from '../components/navbar'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import '../components/styles/style.scss'
import Footer from '../components/footer'
import moment from 'moment'

 const Blog = ({data}) => {
     const date = moment().format("Do MMM  YY");
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
                 <h1 className="h1 text-uppercase text-center ">Notre blog </h1>
                 <p className="text-blog text-center text-xl text-black-50 mb-3"> Nos dernieres nouveautés</p>
                 <div className="container offset-1">
                     
                     <article className="row main-articles">
                        {
                            data.allMarkdownRemark.edges.map(({node}, index) => (
                                <div className="col-xs-4 mr-4 max-w-sm rounded overflow-hidden shadow-lg" key={index}>
                                    <img src={node.frontmatter.image} alt="blog" />
                                    <div className="px-6 py-4">
                                        <div className="font-weight-bold text-purple-500 text-xl text-center text-uppercase">
                                            <strong >{node.frontmatter.title}</strong>
                                        </div>
                                    </div>
                                    <p className="text-center text-black-50 font-italic mb-2">{node.frontmatter.description} </p>
                                    <div className="btn-read bg-center flex-center ">
                                        <p className="btn-outline-read btn-outline-dark  text-center text-black ml-auto">Lire la suite</p>
                                    </div>
                                    <h4 className="text-center text-black font-weight-bold mb-3 py-2" >Posté le {date}</h4>
                                </div>
                            ))
                        }
                     </article>
                     
                 </div>
                 <div className="jumbotron transparent bg-blue-70 mt-3">

                 </div>
             </main>  
             <Footer />      
        </div>   
    )
}

export const query = graphql`
query queryBlogs {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blogs/"}}) {
    edges {
      node {
        id
        frontmatter {
          image
          price
          title
          description   
        }
      }
    }
  }
}
`


export default Blog