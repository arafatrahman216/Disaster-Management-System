const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    ComID: {
        type: Integer,
        required: true
    },

    Users: {
        type: [Integer],
        required: true
    },

    Name: {
        type: String,
        required: true
    },
    LocationID: {
        type: Integer,
        required: true
    },
    Leader: {
        type: Integer,
        required: true
    },
    CreatedBy: {
        type: Integer,
        required: true
    },
    DateCreated: {
        type: Date,
        required: true , 
        default: Date.now
    }
});

module.exports = mongoose.model('Community', communitySchema);