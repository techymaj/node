const http = require('node:http');
const fs = require('node:fs');

http.createServer((req, res) => {
// executed when a request happens
    if (req.url === '/') {
        fs.createReadStream(`${__dirname}/index.htm`).pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'}); // when a req happens, do this, construct a response
        const data = {
            name: "Wilfried M. Majaliwa",
            age: 29
        }
        res.end(JSON.stringify(data)); // serialize the data into JSON
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
}).listen(8000, '127.0.0.1', null, function (){
    console.log('Your server is running on port 8000');
});