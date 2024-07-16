const express = require('express');
const router = express.Router();

const { getAnnouncements, getCommunity } = require('../controllers/Community/Announcements');
const { getChats } = require('../controllers/Community/Chat');


router.get('/:id', getCommunity);

router.get('/:id/chat', getChats);

router.get('/:id/announcements', getAnnouncements);

module.exports = router;