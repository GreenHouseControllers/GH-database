// add modules
const express = require('express');
const bodyParser = require('body-parser');
const getConfig = require('gh-get-config');
const config = require('gh-config');
const userNav = require('gh-user-nav');
const errorLog = require('gh-logger');
const multer = require("multer");
const moment = require('moment');


// connect with gh-get-config
getConfig('connect', __dirname, './config/config.json');
// connect with gh-config
config.connect(__dirname, './config/users/connects.json');
//clean user list
config.null();

// connect with gh-user-nav
userNav.connect(__dirname, './config/users/admin.json');

//connect with error logger
errorLog.connect(__dirname, './errors/log.json');

// get PORT
const PORT =  getConfig('port');

// creating app
const app = express();

// add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// add multer
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./data/storage");
    },
    filename: (req, file, cb) =>{
        cb(null,  moment().format('MMMM_Do_YYYY_h_mm_ss_a_') + file.originalname);
    }
});

app.use(express.static(__dirname));
app.use(multer({storage:storageConfig}).single("filedata"));


// Routes
app.use('/api', require('./bin/routes'));
app.use('/connect', require('./bin/routes/connect'));
app.use('/admin', require('./bin/routes/admin'));

// server listen
app.listen(PORT, function() {
    console.log(`DB started on port ${PORT}`);
});