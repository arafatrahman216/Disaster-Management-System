const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    AnnouncementID: {
        type: Number,
        required: true
    },
    Content: {
        type: String,
        required: true
    },
    CreatedBy: {
        type: Number,
        required: true
    },
    CreationDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    CommunityID: {
        type: Number,
        required: false
    },
    Urgency: {
        type: String,
        enum: ['low', 'medium', 'high'],
        required: true
    }
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;