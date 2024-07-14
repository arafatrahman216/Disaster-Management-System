const mongoose = require('mongoose');

const emergencyContactSchema = new mongoose.Schema({
    contactID: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    locationID: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('EmergencyContact', emergencyContactSchema);