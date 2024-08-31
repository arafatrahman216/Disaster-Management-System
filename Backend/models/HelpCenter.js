const mongoose = require('mongoose');

const helpCenterSchema = new mongoose.Schema({
    CenterID: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        enum: ['Hospital', 'ShelterCenter'],
        required: true
    },
    LocationID: {
        type: Number,
        required: true
    },
    Phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    Capacity: {
        type: Number,
        required: true
    },
    BookedSeats: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('HelpCenter', helpCenterSchema);