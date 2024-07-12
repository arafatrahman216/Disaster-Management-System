const express = require('express');
const router = express.Router();
const { getCollections } = require('../controllers/Home/HomeController');

router.get('/', getCollections );

module.exports = router;