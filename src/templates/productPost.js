import React from 'react'
import { Helmet } from 'react-helmet'
import  { graphql } from 'gatsby'

 const ProductPost = () => {
    return (
        <div>
            <Layout location={this.props.location} title={siteTitle}>
                <Helmet htmlAttributes={{ lang: 'en' }}>
                    <title>${siteTitle}</title>
                    <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
                    <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0"></script>
                </Helmet>
            </Layout>
        </div>
    )
}


      
    
export default ProductPost