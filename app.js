const Emitter = require('node:events'); // use node: for native modules
const EventConfig = require('./config').events;

const emitr = new Emitter();

emitr.on(EventConfig.SAVE, () => {
    console.log('save save');
})
emitr.on(EventConfig.SAVE, () => {
    console.log('autosave');
})
emitr.on(EventConfig.LOGOUT, () => {
    console.log('you\'ve been logged out');
})

emitr.emit(EventConfig.SAVE);
emitr.emit(EventConfig.LOGOUT);

