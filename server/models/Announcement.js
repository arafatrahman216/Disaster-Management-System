const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    AnnouncementID: {
        type: Integer,
        required: true
    },
    Content: {
        type: String,
        required: true
    },
    CreatedBy: {
        type: Integer,
        required: true
    },
    CreationDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    CommunityID: {
        type: Integer,
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