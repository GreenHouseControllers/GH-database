// add modules
const express = require('express');
// creating router
const router = express.Router();
// add fileSystemController
const fileSystemController = require('../controllers/df/df');
// fork
router.post('/df', fileSystemController.df);
router.post('/json', fileSystemController.json);
// exports
module.exports = router;
