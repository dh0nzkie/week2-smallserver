
/* const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World... again');
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
}); */

// NPM Codes
var connect = require('connect');
var http = require('http');

var app = connect();
console.log("Our Connect server is running");

function helloworld(req,res,next) {
res.setHeader('Content-Type', 'text/plain');
res.end('Hello world talaga ulit');

}

function byeworld(req,res,next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bye world naman');
    
    }

app.use('/helloo',helloworld);
app.use('/bye',byeworld);
app.listen(3000);

