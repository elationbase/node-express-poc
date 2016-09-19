/* jshint esversion: 6 */
var express = require('express');
var router = express.Router();


router.get('/users', function(req, res) {
    var info = '';
    var data = req.app.get('data');
    data.users.forEach(function(item) {
        info += `
            <li>
                <h2>${item.name}</h2>
                <p>${item.summary}</p>
            </li>
        `;
    });
    res.send(`
        <h1>elationbase Meetups</h1>
        ${info}
    `);
});

router.get('/users/:user', function(req, res) {
    var data = req.app.get('data');
    var user = data.users[req.params.user];
    res.send(`
        <h1>elationbase Meetups</h1>
        <h2>User ${user.name}</h2>
        <h3>${user.title}</h3>
        <p>${user.summary}</p>
    `);
});

module.exports = router;
