const http = require('node:http');
const fs = require('node:fs');

http.createServer((req, res) => {
// executed when a request happens
    res.writeHead(200, {'Content-Type': 'text/html'}); // when a req happens, do this, construct a response
    const html = fs.createReadStream(`${__dirname}/index.htm`, 'utf8');
    html.pipe(res);
}).listen(8000, '127.0.0.1', null, function (){
    console.log('Server is running on port 8000');
});