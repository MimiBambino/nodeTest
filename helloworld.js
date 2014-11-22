// basic web server

/*var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World");
}).listen(1337, '127.0.0.1');
console.log("Server running at http://127.0.0.1:1337/");*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(1337, '127.0.0.1');
console.log("Server running at http://127.0.0.1:1337/");