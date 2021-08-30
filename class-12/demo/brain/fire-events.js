// this file will be used for firing all the events
'use strict';

const io = require('socket.io-client');
const connectionToBrain = io.connect('http://localhost:3000');
const connectionToHealthSystem = io.connect(`http://localhost:3000/health`);

// sun
connectionToBrain.emit('light', { brightness: 90 });
connectionToBrain.emit('light', { brightness: 50 });
connectionToBrain.emit('light', { brightness: 5 });

// flower
connectionToBrain.emit('smell', { scent: 'flowers' });
connectionToBrain.emit('smell', { scent: 'bad milk' });

// sneeze
connectionToHealthSystem.emit('virus', { virus: 'covid-19' });