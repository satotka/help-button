const http = require('http'); // https://nodejs.org/api/http.html
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request: ${req.url}`);
    fs.readFile('./contents/index.html', 'utf-8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data, 'utf-8');
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
