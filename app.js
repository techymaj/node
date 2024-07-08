const fs = require('node:fs');
const zlib = require('node:zlib');

const readable = fs.createReadStream(__dirname+'/greet.txt');

const writableStream = fs.createWriteStream(__dirname+'/greetcopy.txt');

const compressed = fs.createWriteStream(__dirname+'/greet.txt.gz');

const gzip = zlib.createGzip(); // duplex stream

readable.pipe(writableStream); // create a copy of greet.txt

readable.pipe(gzip) // send my readable chunk to my writable stream
    .pipe(compressed); // get the compressed chunk and write it to the .gz file

