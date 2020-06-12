const axios = require('axios')
require('dotenv').config()

exports.handler = (event,context, callback) => {
    axios.post(
        "https://us8.api.mailchimp.com/3.0/lists/053238f280/members",{
            "email_address": event.queryStringParameters.mail,
            "status": "subscribed"
        },
        {
            auth: {
                username: "cedric_93",
                password: process.env.PASSWORD
            }
        }
    ).then(() => {
        callback(null, {
            statusCode: 200,
            body: "Success"
        })
    }).catch((error) => {console.log(error);
        callback(null, {
            statusCode: 400,
            body: "Error" + error.message
        })
    })
}