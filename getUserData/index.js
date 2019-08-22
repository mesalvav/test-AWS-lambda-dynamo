'use strict'
const AWS = require('aws-sdk');

AWS.config.update({region: "us-east-2"});

exports.handler = function (event, context, callback) {
    const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

    var params = {
      Key: {
       id: {
         S: "12345"
        }
       
      }, 
      TableName: "Users"
     };

     ddb.getItem(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
      
    });
}