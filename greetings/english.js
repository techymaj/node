const data = require('./greetings.json');

const greet = function () {
    console.log(data.en);
}

module.exports = greet;