require('dotenv').config()
module.exports = {
    siteMetadata: {
        title: `Mobilia Shop`,
        description: `Furniture sales website.`,
        author: `Cédric Ngouné`,
        url: `https://e-shop-site.netlify.app/`
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
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
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
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-netlify-identity`,
            options: {
                url: `https://e-shop-site.netlify.app/`
            }
        },
        {
            resolve: `gatsby-plugin-mailchimp`,
            options: {
                endpoint: process.env.MAILCHIMP_ENDPOINT,
                timeout: 3500
            }
        },
        {
            resolve: `gatsby-source-stripe`,
            options: {
                objects: ["Sku", "products"],
                secretKey: process.env.STRIPE_SECRET_KEY,
                downloadFiles: false
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}