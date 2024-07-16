const express = require('express');
const router = express.Router();

const {home} = require('../controllers/Home');

router.get('home', home) 

module.exports = router;