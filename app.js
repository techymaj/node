const EventEmitter = require('node:events');
// const util = require('node:util');

class Greetr extends EventEmitter {
    start(data) {
        console.log(`Greetr started! ${data}`);
        this.emit('ready', data);
    }
}

// any objects created from Greetr should also have access
// to the properties and methods on the prototype of EventEmitter
// util.inherits(Greetr, EventEmitter);
// inherits(childConstructor, superConstructor)

// Greetr.prototype.start = function (data) {
//     // console.log(`Greetr started! ${data}`);
//     // this.emit('ready', data);
// }

const startGreetr = new Greetr();

startGreetr.on('ready', data => {
    console.log(`Greetr ready! with data: ${data}`);
})

startGreetr.start('boy, do I have data for you!');