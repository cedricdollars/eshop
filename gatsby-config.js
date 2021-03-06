require('dotenv').config()
module.exports = {
    siteMetadata: {
        title: `Mobelia Shop`,
        description: `Furniture sales website.`,
        author: `Cédric Ngouné`,
        url: `eshop-mobelia.netlify.app`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-build-date`,
            options: {
                formatAsDateString: true, 
                formatting: {
                    format: 'dddd D MMMM YYYY', 
                    utc: false,
                }
             },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `product`,
                path: `${__dirname}/products`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/blogs`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `lit`,
                path: `${__dirname}/src/products/lits`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `carousel`,
                path: `${__dirname}/src/components/carousel`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/src/pages`,
              name: 'pages',
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-less`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, 
            },
        },
        {
            resolve: `gatsby-plugin-netlify-identity`,
            options: {
                url: `https://eshop-mobelia.netlify.app`
            }
        },
        {
            resolve: `gatsby-plugin-mailchimp`,
            options: {
                endpoint: "https://yahoo.us8.list-manage.com/subscribe/post?u=07605aff4d4b15b134d3b2c82&amp;id=bcc612a995",
                timeout: 3500
            }
        },
        {
            resolve: `gatsby-plugin-snipcart`,
            options: {
                apiKey: `YzY1Yzk5ODAtMWRkMy00ZTI2LTg1ZmEtMWI0ZTljZWFmYTMzNjM3MjU4NjI3NTM3Mzk4MzE5`
            }  
        },
        {
            resolve: `gatsby-source-stripe`,
            options: {
                objects: ["Sku"],
                secretKey: "sk_test_tktCxNPOMxVa7GNjkEB74kZH00rrn7zEO2",
                downloadFiles: false
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}