'use strict';

const EventEmitter = require('node:events').EventEmitter;

module.exports = class Greetr extends EventEmitter {

    constructor() {
        super();
    }

    // these are automatically put on the prototype and down the chain. Greetr.prototype.start
    start() {
        console.log('Starting Greetr!');
        this.emit('start');
    }
};



