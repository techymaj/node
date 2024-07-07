const EventEmitter = require('node:events').EventEmitter;

class Greetr extends EventEmitter {

     constructor() {
         super();
         this.greeting = 'Hello World!';
     }

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