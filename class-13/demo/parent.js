'use strict';

// Tareq

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/family');

const chore = process.argv.splice(2)[0];

socket.emit('new chore', chore);

// After we add achore, the server responds back.
// Since we know this was added to the list, we can exit.
socket.on('added', () => {
    socket.disconnect();
})

// one msg queue
// {random id, msg}
// {random id, child id, msg}
// {random id, child id, msg}
// {random id, child id, msg, exp: 2021-9-1, ...}
