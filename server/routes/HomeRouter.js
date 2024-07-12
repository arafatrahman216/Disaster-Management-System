const express = require('express');
const router = express.Router();
const {
    run, getCollection, closeConnection
} = require('../db/connect');


router.get('/', async (req, res) => {
    const collection = await getCollection('User');
    console.log(collection);
    res.json({ message: 'hehe' });
});

module.exports = router;