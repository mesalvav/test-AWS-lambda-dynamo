'use strict'
const AWS = require('aws-sdk');
AWS.config.update({region: "us-east-2"});

exports.handler = async (event, context, callback) => {
    const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    //unmarshall dynamoDB with document client
  const documentClient  = new AWS.DynamoDB.DocumentClient({region: "us-east-2"});
  var params = {
    TableName: "Users",
    Key: { id:  "12345"}
   };
  // before document client used: params as:
  /*
    var params = {
      TableName: "Users",
      Key: {
       id: {
         S: "12345"
        }   } };
        */

// before document client it was used like:  ddb.getItem(params, (err, data) => {...
 
    try {
      const data = await documentClient.get(params).promise();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
}