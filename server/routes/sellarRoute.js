const express = require('express');
const router = express.Router();
const sallerController = require('../controllers/sallerControllar');

router.post('/', sallerController.createSellar);


module.exports = router