const Emitter = require('./emitter');

const event = new Emitter();

event.on('onSave', () => {
    console.log('save save');
})
event.on('onSave', () => {
    console.log('auto save');
})
event.on('logout', () => {
    console.log('you\'ve been logged out');
})

event.emit('onSave');
event.emit('logout')