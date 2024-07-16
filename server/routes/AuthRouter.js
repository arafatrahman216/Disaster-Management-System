const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/login', async (req, res) => {

    const new_user = new User({
        UserID: 3,
        Password: 'hello.123',
        Name: 'hasib',
        Email: 'hasib@gmail.com',
        Phone: '1777777777',
        Address: 'Dhaka',
        UserType: ['affected'],
        Available: true,
        Community : [1],
    }
    );
    try {
        const user = await new_user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }

});

router.get('/register', async (req, res) => {
    res.json({ message: 'Register' });
});

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