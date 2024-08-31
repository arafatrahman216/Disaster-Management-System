const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    DonationID: {
        type: Number,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    DonatedBy: {
        type: Number,
        required: true
    },
    DateDonated: {
        type: Date,
        required: true,
        default: Date.now
    },
    ResourceID: {
        type: Number,
        required: true
    }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;