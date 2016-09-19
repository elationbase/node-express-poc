/* jshint esversion: 6 */
var express = require('express');

var app = express();
var data = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('data', data);

app.use(require('./routes/index'));
app.use(require('./routes/users'));

var server = app.listen(app.get('port'), function() {
    console.log('listening in http://localhost:' + app.get('port'));
});
