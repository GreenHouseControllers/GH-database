// add modules
const express = require('express');
const bodyParser = require('body-parser');
const getConfig = require('gh-get-config');

// connect with gh-get-config
getConfig('connect', __dirname, './config/config.json');
// get PORT
const PORT =  getConfig('port');

// creating app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api', require('./routes'));

// server listen
app.listen(PORT, function() {
    console.log(`DB started on port ${PORT}`);
});