console.log("Loading function");
var AWS = require("aws-sdk");


exports.handler = function(event, context) {
 var eventText = JSON.stringify(event, null, 2);
  console.log("Received event:", eventText);
var sns = new AWS.SNS();
    var params = {
        Message: "FOREIGN OBJECT DETECTED in the Camera", 
        Subject: "Alerts !!!",
        TopicArn: "arn:aws:sns:##"
    };
    sns.publish(params, context.done);
};
