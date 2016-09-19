/* jshint esversion: 6 */
var express = require('express');
var reload = require('reload');

var app = express();
var data = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('data', data);

app.use(express.static('app/public'));

app.use(require('./routes/index'));
app.use(require('./routes/users'));

var server = app.listen(app.get('port'), function() {
    console.log('listening in http://localhost:' + app.get('port'));
});

reload(server, app);
