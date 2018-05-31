const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// setup for the express application
const app = express();

// log requests to the console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setup a default catch-all route that sends back a welcome message in JSON
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to my first node tutorial LOL',
}));

module.exports = app;

