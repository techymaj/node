'use strict';

const Greetr = require('./greetr');

const greetr = new Greetr();
greetr.on('start', () => {
    console.log('Greetr started...');
})

greetr.start();