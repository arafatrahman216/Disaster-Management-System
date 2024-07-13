const mongoose = require('mongoose');

const emergencyContactSchema = new mongoose.Schema({
    contactID: {
        type: Integer,
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
        type: Integer,
        required: true
    },
    address: {
        type: String,
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