'use strict';

const app = require('express')();
const bodyParser = require('body-parser');

app
  .use(require('./logging.middleware'))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/api', require('../api'));

module.exports = app;
