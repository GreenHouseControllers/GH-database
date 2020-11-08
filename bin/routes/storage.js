// add modules
const express = require('express');
// crate router
const router = express.Router();
// add collection controller
const storageController = require('../controllers/storage/storage');
// route
// /api/storage/upload
router.post('/upload', storageController.upload);
// /api/storage/methods
router.post('/methods', storageController.methods);
// /api/storage/methods
router.post('/download', storageController.download);

// exports
module.exports = router;
