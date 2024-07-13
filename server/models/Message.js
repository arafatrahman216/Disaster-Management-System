const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    MessageID: {
        type: Integer,
        required: true
    },
    Sender: {
        type: Integer,
        required: true
    },
    CommunityID: {
        type: Integer,
        required: true
    },
    Content: {
        type: String,
        required: true
    },
    CreationDate: {
        type: Date,
        required: true
    },
    CreationTime: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Message', messageSchema);