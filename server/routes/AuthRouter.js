const express = require('express');
const router = express.Router();
const {register , login} = require('../controllers/Authentication');

router.post('/login', login) 

router.post('/register', register)

router.post('/login' , async (req, res) => {
    const { UserID} = req.body;
    console.log('Name');
    try {
        const users = await User.findOne({UserID});
        console.log(users);
        if (!users) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});
module.exports = router;