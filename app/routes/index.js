/* jshint esversion: 6 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.send(`
        <header>
            <link rel="stylesheet" type="text/css" href="/styles/main.css">
            <h1>elation3ase Users</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="/images/front-cover.jpg">
            <script src="/reload/reload.js"></scripts>
        </header>
    `);
});

module.exports = router;
