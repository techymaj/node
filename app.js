const buffer = new Buffer.alloc(5, 'hello', 'utf-8');
console.log(buffer);
console.log(buffer.toString('utf8')); // utf8 is the default encoding
console.log(buffer.toJSON());
console.log(buffer[3].toString());

buffer.write('wo');

console.log(buffer.toString('utf8'));