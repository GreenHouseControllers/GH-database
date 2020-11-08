// add modules
const express = require('express');
// crate router
const router = express.Router();
// add collection controller
const connectController = require('./connectController');
// route
router.post('/app', connectController.appConnect);
// exports
module.exports = router;
