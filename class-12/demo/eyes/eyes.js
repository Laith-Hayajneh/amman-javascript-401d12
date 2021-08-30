'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';

const connectionToBrain = io.connect(host);

// listen for brain events

connectionToBrain.on('brightness', handelBrightness);

function handelBrightness(payload) {
    if (payload.brightness >= 90) {
        console.log('eyes are closed');
    } else if (payload.brightness <= 10) {
        console.log('eyes are open');
    } else {
        console.log('eyes are squinting');
    }
}
