const express = require('express');
const router = express.Router();

const  crudController = require('../controllers/df');

router.post('/df', crudController.df);


module.exports = router;
