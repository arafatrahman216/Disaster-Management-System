const express = require('express');
const router = express.Router();

router.get('/login', async (req, res) => {
    res.json({ message: 'Login' });
});

router.get('/register', async (req, res) => {
    res.json({ message: 'Register' });
});

module.exports = router;