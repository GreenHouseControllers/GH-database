const express = require('express');
const router = express.Router();

const crudController = require('../controllers/df');

router.post('/df', crudController.df);
router.post('/json', crudController.json);


module.exports = router;
