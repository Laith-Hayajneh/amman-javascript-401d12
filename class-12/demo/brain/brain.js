'use strict';

const port = 3000;
const io = require('socket.io')(port);// http://localhost:3000
// namespace
const healthSystem = io.of('/health');// http://localhost:3000/health

io.on('connection', (socket) => {
    console.log('connected to brain');

    socket.on('light', (payload) => {
        // process light data
        // re-direct to eyes
        console.log('the light is recieved in the brain :))', payload);
        io.emit('brightness', payload);
    });

    socket.on('smell', (payload) => {
        // process smell data
        // re-direct to nose
        console.log('the smell is recieved in the brain :))', payload);
        io.emit('scent', payload);
    });
});

// emit a connection

// client --- open socket ---> server

healthSystem.on('connection', (socket) => {
    console.log('connected to health');

    socket.on('virus', (payload) => {
        // process health data
        // re-direct to nose
        console.log('the health is recieved in the brain :))', payload);
        healthSystem.emit('covid-19', payload);
    });
});

// group chat 
