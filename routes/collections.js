// add modules
const express = require('express');
// crate router
const router = express.Router();
// add collection controller
const collectionsController = require('../controllers/collection/collections');
// route
router.post('/', collectionsController.collection);
// exports
module.exports = router;
