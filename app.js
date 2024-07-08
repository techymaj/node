const fs = require('node:fs');

const readable = fs.createReadStream(__dirname+'/greet.txt', {
    encoding: 'utf8', // to get strings instead of buffers
    highWaterMark: 100 * 1024 // number of bytes we want our buffer size to be
});

const writableStream = fs.createWriteStream(__dirname+'/greetcopy.txt');

readable.on('data', chunk => writableStream.write(chunk));

