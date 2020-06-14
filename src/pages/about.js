import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import imgAbout from '../images/imageAbout.jpg'

const About = ()=> {
    return(
     <>
        <Navbar/>
        <div className="container bg-gray-80">
             <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/>
            </Helmet>
            
            <div className="jumbotron bg-white">
                <h1 className="my-10 text-xl font-bold text-black-700 uppercase text-center">à propos de nous</h1>
                <div className="row h-100">
                    <aside className="col-12 col-md-4 p-0 ">
                        <img src={imgAbout} alt="image about" className="image-about "/>
                    </aside>
                    <section className="col-lg-8 pr-2">
                        <p className="text-justify text-black-50">Lorem Ipsum is simply dummy text of the 
                            printing and ypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                            of Lorem Ipsum.
                            printing and ypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                            of Lorem Ipsum.printing and ypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                            of Lorem Ipsum.
                        </p>
                    </section>
                </div>
            </div> 
        </div>
        <Footer/>
     </>
    )
}
export default About