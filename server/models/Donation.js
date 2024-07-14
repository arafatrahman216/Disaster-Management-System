const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    DonationID: {
        type: Integer,
        required: true
    },
    Amount: {
        type: Integer,
        required: true
    },
    DonatedBy: {
        type: Integer,
        required: true
    },
    DateDonated: {
        type: Date,
        required: true,
        default: Date.now
    },
    ResourceID: {
        type: Integer,
        required: true
    }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;