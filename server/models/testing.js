const mongoose = require('mongoose');

const testingSchema = new mongoose.Schema({
    testID: {
        type: String,
        required: true
    },
    testName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Test', testingSchema);