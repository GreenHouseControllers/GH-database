// add modules
const express = require('express');
// creating router
const router = express.Router();

// fork
router.use('/', require('../connect/connectFork'));
// exports
module.exports = router;