/* jshint esversion: 6 */
var express = require('express');

var app = express();
var data = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    var info = '';
    data.speakers.forEach(function(item) {
        info += `
            <li>
                <h2>${item.name}<h2>
                <p>${item.summary}</p>
            </li>
        `;
    });
    res.send(`
        <h1>elationbase Meetups</h1>
        ${info}
    `);
});

var server = app.listen(app.get('port'), function() {
    console.log('listening in http://localhost:' + app.get('port'));
});


// const http = require('http');
// const server = http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type" : "text/html"});
//     response.write('<h1>elationbase Meetups</h1>');
//     response.end();
// });
//
// server.listen(3000);
// console.log('listening in http://localhost:3000');
