const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    ResourceID: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    QuantityType : {
        type: String,
        required : true
    },
    LocationID: {
        type: Number,
        required: false
    },
    Status: {
        type: String,
        enum: ['available', 'unavailable'],
        required: true
    }
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;