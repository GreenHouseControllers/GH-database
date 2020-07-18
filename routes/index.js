const express = require('express');
const router = express.Router();

router.use('/fs', require('./file_sistem'));

module.exports = router;