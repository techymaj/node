const http = require('node:http');
const fs = require('node:fs');

http.createServer((req, res) => {
// executed when a request happens
    res.writeHead(200, {'Content-Type': 'application/json'}); // when a req happens, do this, construct a response
    const data = {
        name: "Wilfried M. Majaliwa",
        age: 29
    }
    res.end(JSON.stringify(data));  // serialize the data into JSON
}).listen(8000, '127.0.0.1', null, function (){
    console.log('Server is running on port 8000');
});