// add modules
const express = require('express');
const bodyParser = require('body-parser');
const getConfig = require('gh-get-config');
const config = require('gh-config');

// connect with gh-get-config
getConfig('connect', __dirname, './config/config.json');
// connect with gh-config
config.connect(__dirname, './config/users/connects.json');
//clean user list
config.null();

// get PORT
const PORT =  getConfig('port');

// creating app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api', require('./routes'));
app.use('/connect', require('./routes/connect'));

// server listen
app.listen(PORT, function() {
    console.log(`DB started on port ${PORT}`);
});