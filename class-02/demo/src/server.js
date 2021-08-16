'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const browserMiddleware = require('./middleware/browser');
const loggerMeddleware = require('./middleware/logger');

app.use(express.json());
// app.use(browserMiddleware);// using app.use will apply the middleware to all the access points
app.use(loggerMeddleware);

function square(n) {
    return (req, res, next) => {
        if (typeof n !== 'number') {
            next('not a number >:(');
        } else {
            // square the number
            let result = n * n;
            req.square = result;
            next();
        }
    }
}

//use query string
app.get('/hello', (req, res) => {
    //http://localhost:3000/hello?name=Ibrahim&age=25
    res.send(`Hi from query, ${req.query.name}`);
})

//use URL params
app.get('/hello/:name', (req, res) => {
    //http://localhost:3000/mohammad
    res.send(`Hi from params, ${req.params.name}`);
})

/*
    by commenting out app.use(browserMiddleware)
    we can apply the middleware to one specific access point
    using the sentax below
    app.post('/hello', browserMiddleware, (req, res) => {
*/
app.post('/hello', (req, res) => {
    console.log('>>>>>>' + req.body.name);
    res.send(`Hi from params, ${req.body.name} and from ${req.browser}`);
})

app.get('/browser', (req, res) => {
    res.send(`Hi from browser ${req.browser}`);
})

app.get('/square', square('a'), (req, res) => {
    res.send(`number square ${req.square}`);
})

app.get('/both', browserMiddleware, square(5), (req, res) => {
    res.send(`number square ${req.square} from browser ${req.browser}`);
})

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    }
}
