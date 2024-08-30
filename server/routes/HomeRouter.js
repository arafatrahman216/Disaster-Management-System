const express = require('express');
const router = express.Router();

const {home, getAllLocations} = require('../controllers/Home');

router.get('', home) 
router.get('/locations', getAllLocations);

module.exports = router;