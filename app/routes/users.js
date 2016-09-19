/* jshint esversion: 6 */
var express = require('express');
var router = express.Router();


router.get('/users', function(req, res) {
    var info = '';
    var data = req.app.get('data');
    data.users.forEach(function(item) {
        info += `
            <li>
                <img src="/images/${item.shortname}.jpg">
                <h2>${item.name}</h2>
                <p>${item.summary}</p>
            </li>
        `;
    });
    res.send(`
        <h1>elation3ase Artists</h1>
        <link rel="stylesheet" type="text/css" href="/styles/main.css">
        <ul class="artists">
            ${info}
        </ul>
        <script src="/reload/reload.js"></scripts>
    `);
});

router.get('/users/:user', function(req, res) {
    var data = req.app.get('data');
    var user = data.users[req.params.user];
    res.send(`
        <link rel="stylesheet" type="text/css" href="/styles/main.css">
        <h1>elation3ase Artists</h1>
        <h2>User ${user.name}</h2>
        <h3>${user.title}</h3>
        <img src="/images/${user.shortname}.jpg">
        <p>${user.summary}</p>
        <script src="/reload/reload.js"></scripts>
    `);
});

module.exports = router;
