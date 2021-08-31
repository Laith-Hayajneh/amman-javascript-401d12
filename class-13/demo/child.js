'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/family');

socket.emit('getAll');

socket.on('chore', payload => {
    console.log(`${payload.chore} is done!`);
    socket.emit('received', payload.id);
});

