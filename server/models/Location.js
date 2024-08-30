const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    LocationID: {
        type: Number,
        required: true
    },

    IncidentID: {
        type: [Number],
        required: true  
    },
    
    Latitude: {
        type: Number,
        required: true
    },
    Longitude: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Location', locationSchema);