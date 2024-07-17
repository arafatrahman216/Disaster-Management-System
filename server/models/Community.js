const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    ComID: {
        type: Number,
        required: true
    },

    Users: {
        type: [Number],
        required: true
    },

    JoinRequests: {
        type: [Number],
    },

    Name: {
        type: String,
        required: true
    },
    LocationID: {
        type: Number,
        required: true
    },
    Leader: {
        type: Number,
        required: true
    },
    CreatedBy: {
        type: Number,
        required: true
    },
    DateCreated: {
        type: Date,
        required: true , 
        default: Date.now
    }
});

module.exports = mongoose.model('Community', communitySchema);