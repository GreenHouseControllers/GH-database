// add modules
const express = require('express');
// crate router
const router = express.Router();
// add collection controller
const adminController = require('../admin/adminController');
// route
// /admin/register
router.post('/register', adminController.register);
// /admin/login
router.post('/login', adminController.login);
// /admin/getErrorLog
router.post('/getErrorLog', adminController.getErrorLog);
// exports
module.exports = router;
