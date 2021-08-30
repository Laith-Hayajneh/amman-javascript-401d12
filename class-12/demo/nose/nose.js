'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';

const connectToBrain = io.connect(host);
const connectionToHealthSystem = io.connect(`${host}/health`);

// listen for brain events
connectToBrain.on('scent', scentHandlers);

function scentHandlers(payload) {
    if (payload.scent == 'flowers') {
        console.log('I smell flowers');
    } else {
        console.log('I smell bad scent');
    }
}

connectionToHealthSystem.on('covid-19', handleCovidVirus);
function handleCovidVirus(payload) {
    console.log('Fighting off', payload.virus);
}

