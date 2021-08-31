'use strict';

const io = require('socket.io')(3000);
const family = io.of('/family');
const uuid = require('uuid').v4;// random uuid

const queue = {
    chores: {/*id: 3, chore: 'new chore'*/}// id , chore
};

family.on('connection', socket => {// recieved from tareq
    // recieve chore from parent
    socket.on('new chore', chore => {
        // send chore to child
        let id = uuid();
        queue.chores[id] = chore;

        socket.emit('added');// so i need to only disconnect tariq, which have this socket
        family.emit('chore', { id, chore });
    })

    // send all the child messeages once the child is connected.
    socket.on('getAll', () => {
        Object.keys(queue.chores).forEach(id => {
            socket.emit('chore', { id, chore: queue.chores[id] });
        })
    });

    // remove the message from the queue, once recieved from child
    socket.on('received', id => {
        delete queue.chores[id];
    });
});

// tareq -- socket --> hub
