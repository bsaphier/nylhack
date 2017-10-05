'use strict';

const app = require('./app');

const PORT = 5000;
const server = app.listen(PORT, function (err) {
    if (err) throw err;
    console.log('HTTP server listening on port', PORT);
});

module.exports = server;
