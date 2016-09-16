const http = require('http');
const server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write('<h1>elationbase Meetups</h1>');
    response.end();
});

server.listen(3000);
console.log('listening in http://localhost:3000');
