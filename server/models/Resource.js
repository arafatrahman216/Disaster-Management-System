const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    ResourceID: {
        type: Integer,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Quantity: {
        type: Double,
        required: true
    },
    LocationID: {
        type: Integer,
        required: true
    },
    Status: {
        type: String,
        enum: ['available', 'unavailable'],
        required: true
    }
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;