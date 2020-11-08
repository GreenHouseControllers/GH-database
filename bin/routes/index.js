// add modules
const express = require('express');
// creating router
const router = express.Router();

// fork
router.use('/fs', require('./file_sistem'));
router.use('/collection', require('./collections'));
router.use('/storage', require('./storage'));
// exports
module.exports = router;