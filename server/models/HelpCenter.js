const mongoose = require('mongoose');

const helpCenterSchema = new mongoose.Schema({
    CenterID: {
        type: Integer,
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
        type: Integer,
        required: true
    },
    Phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    Capacity: {
        type: Integer,
        required: true
    },
    BookedSeats: {
        type: Integer,
        required: true
    }
});

module.exports = mongoose.model('HelpCenter', helpCenterSchema);