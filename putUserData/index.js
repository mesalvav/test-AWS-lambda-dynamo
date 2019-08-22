'use strict'
const AWS = require('aws-sdk');
AWS.config.update({region: "us-east-2"});

exports.handler = async (event, context, callback) => {
    const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const documentClient  = new AWS.DynamoDB.DocumentClient({region: "us-east-2"});
  var params = {
    TableName: "Users",
    Item: { id:  "12346", firstname: "Mariox", lastname:"Quijote"}
   };
  
 
    try {
      const data = await documentClient.put(params).promise();
      console.log(params.Key);
    } catch (error) {
      console.log(error);
    }
}