const Employee = require('./employee-schema');
const uuid = require('uuid').v4;

exports.handler = async (event) => {
    try {
        const id = uuid();
        const { name, age } = JSON.parse(event.body);

        let emp = new Employee({ id, name, age });
        let item = await emp.save();

        return {
            statusCode: 201,
            body: JSON.stringify(item)
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