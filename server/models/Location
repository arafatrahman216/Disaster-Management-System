const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    LocationID: {
        type: Integer,
        required: true
    },
    Latitude: {
        type: Double,
        required: true
    },
    Longitude: {
        type: Double,
        required: true
    },
    Address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Location', locationSchema);