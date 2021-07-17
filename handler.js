'use strict';
const db = require("./connect");

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };


module.exports.getAllClients = (event, context, callback) => {

  context.callbackWaitsForEmptyEventLoop = false;

  db.getAll('clients')
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
};
