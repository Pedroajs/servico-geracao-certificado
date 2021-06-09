const http = require('http');

const reqListener = (request, response) => {}

const server = http.createServer(reqListener);

server.listen(3000);