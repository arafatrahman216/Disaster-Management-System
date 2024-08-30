const express = require('express');
const router = express.Router();

const {home} = require('../controllers/Home');

router.get('', home) 

module.exports = router;