const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    MessageID: {
        type: Number,
        required: true
    },
    Sender: {
        type: Number,
        required: true
    },
    CommunityID: {
        type: Number,
        required: true
    },
    Content: {
        type: String,
        required: true,
    },
    CreationTime: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', messageSchema);