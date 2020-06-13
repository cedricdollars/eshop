import React from 'react'
import Navbar from '../components/navbar'
import { Helmet } from 'react-helmet'


 const Blog = () => {
    return (
        <div>
             <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/>
            </Helmet>
            <Navbar />
             <main>
                 <div className="jumbotron">
                    <h2 className=" text-center tite-blog">
                        Blog
                    </h2>
                 </div>
                 <div className="container">
                     <aside>

                     </aside>
                 </div>
             </main>        
        </div>
        
    )
}

export default Blog