'use strict';
const dynamoose = require('dynamoose');

const employeeSchema = new dynamoose.Schema({
    id: String,
    name: String,
    age: Number
});

module.exports = dynamoose.model('employees', employeeSchema);
