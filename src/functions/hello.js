module.exports.handler = async function(event, context) {
    console.log("queryStringParameters", event.queryStringParameters)
    return {
      // return null to show no errors
      statusCode: 200, // http status code
      body: JSON.stringify({
        msg: "Hello, World! This is better " + Math.round(Math.random() * 10)
      })
    }
  }