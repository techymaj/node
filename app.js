const http = require('node:http');

http.createServer((req, res) => {
// executed when a request happens
    res.writeHead(200, {'Content-Type': 'text/plain'}); // when a req happens, do this, construct a response
    res.end();
}).listen(8000, '127.0.0.1', null, function (){
    console.log('Server is running on port 8000');
});