'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const loggerMeddleware = require('./middleware/logger');

const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');

app.use(express.json());
app.use(loggerMeddleware);
app.use(customerRoutes);
app.use(orderRoutes);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    }
}
