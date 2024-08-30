const express = require('express');
const Announcement = require('../models/Announcement');

const router = express.Router();

// get all global announcements

router.get('/announcements', async (req, res) => {
    try {
        const announcements = await Announcement.findOne({ CommunityID: 0 });
        return res.status(200).json(announcements);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// get announcements for a community

router.get('/community/:id/announcements', async (req, res) => {
    try {
        const { id } = req.params;
        const announcements = await Announcement.find({ CommunityID: id });
        return res.status(200).json(announcements);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}
);

// create announcement for a community

router.post('/community/:id/announcements/create', async (req, res) => {
    try {
        const communityID = req.params.id;
        const { AnnouncementID, Content, CreatedBy, Urgency} = req.body;
        const newAnnouncement = await Announcement.create({ AnnouncementID, Content, CreatedBy, communityID, Urgency });
        return res.status(201).json(newAnnouncement);
    }

    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
       
});


// global announcement created by admin

router.post('/announcements/create', async (req, res) => {
    try {
        const { AnnouncementID, Content, CreatedBy, CommunityID, Urgency } = req.body;
        const newAnnouncement = await Announcement.create({ AnnouncementID, Content, CreatedBy, CommunityID, Urgency });
        return res.status(201).json(newAnnouncement);
    }

    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

});

module.exports = router;