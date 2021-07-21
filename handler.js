// 'use strict';
const db = require("./connect");

module.exports.getAllClients = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getAll('clients')
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res),
      })
    })
    .catch(e => {
      callback(null, {
        statusCode: e.statusCode || 500,
        body: JSON.stringify(e)
      })
    })

            /* Area de Test */

  //Prueba de insert en la bd
  // const result = db.insert('clients', {id: 10, nombre: 'Test2'});
  // const response = {
  //       statusCode: 200,
  //       body: JSON.stringify('Hello from Lambda!'),
  //   };
  // return response;
};

// module.exports.getAllClients = (event, context, callback) => {
//   const result = "Por favor corre!!";
//   return result;
// };

// module.exports.getAllClients = (event, context, callback) => {
//   const result = db.insert('clients', {id: 16, nombre: 'TestInsertErick'});
//   const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//   return result;
// };