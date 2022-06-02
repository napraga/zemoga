// Dependencies
const AWS = require("aws-sdk");
const OAuth = require('oauth-1.0a')
const crypto = require('crypto')
const awaitRequest = require('./await-request')

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    if(event.requestContext.http.method === "PUT"){
      let requestJSON = JSON.parse(event.body);
      await dynamo
          .put({
            TableName: "zemoga",
            Item: {
              id: requestJSON.id,
              image: requestJSON.image,
              title: requestJSON.title,
              description: requestJSON.description
            }
          })
          .promise();
        body = `Put finished to id: ${requestJSON.id}`;
    }else{
      
      let results = await dynamo.scan({ TableName: "zemoga" }).promise();

      // Initialize
      const oauth = OAuth({
          consumer: {
              key: 'KRy7l0v8wex3w8Sy5zThai3Ea',
              secret: 'X2eBm0Y21kYEuR74W3Frqc2JVIizOj8Q1EVGatDsEVVEJo0ucu',
          },
          signature_method: 'HMAC-SHA1',
          hash_function(base_string, key) {
              return crypto
                  .createHmac('sha1', key)
                  .update(base_string)
                  .digest('base64')
          },
      })

      const request_data = {
          url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
          method: 'GET'
      }

      const token = {
          key: '1220032047516921859-otvXjhExyUTZ5GLxssc9h5ORqtPZja',
          secret: 'tmJKqM4ORfQW6CH7wIVV8uKNpmSEmeFAP8lYwGb19uYjj',
      }

      let twitter = await awaitRequest({
          url: request_data.url,
          method: request_data.method,
          form: oauth.authorize(request_data, token),
      })

      body = {
        results: results,
        twitter: twitter
      }

    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};
