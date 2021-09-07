const Employee = require('./employee-schema');
const uuid = require('uuid').v4;

exports.handler = async (event) => {
    try {
        const id = event.pathParameters?.id ? event.pathParameters.id : null;
        let employees;
        if (id) {//get employee by id
            // we're using the index of zero, because this query will return any array
            // of only one employee - one employee becuase we're using an id
            employees = (await Employee.query('id').eq(id).exec())[0];
        } else {// get all employees
            employees = await Employee.scan().exec();
        }

        return {
            statusCode: 200,
            body: JSON.stringify(employees)
        }

    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            msg: 'exception in post employee',
            error: error
        }
    }
}