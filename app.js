'use strict';

const EventEmitter = require('node:events').EventEmitter;

class Greetr extends EventEmitter {

     constructor() {
         super();
         this.greeting = 'Hello World!';
     }

     // these are automatically put on the prototype and down the chain. Greetr.prototype.start
    start() {
        console.log('Starting Greetr!');
        this.emit('start');
    }
}

const greetr = new Greetr();
greetr.on('start', () => {
    console.log('Greetr started...');
})

greetr.start();