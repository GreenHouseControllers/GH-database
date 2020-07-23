const express = require('express');
const bodyParser = require('body-parser');
const getConfig = require('gh-get-config');

getConfig('connect', __dirname, './config/config.json');

const PORT =  getConfig('port');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api', require('./routes'));

app.listen(PORT, function() {
    console.log(`DB started on port ${PORT}`);
});