'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const sns = new AWS.SNS();

console.log(process.argv);

const msg = process.argv[2];

const msgObj = {
    localMessage: msg,
    courseName: '401d12'
}

const params = {
    TopicArn: 'arn:aws:sns:us-east-1:104801677433:401d12-sns',
    Message: JSON.stringify(msgObj),
}

sns.publish(params).promise().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});