const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    IncidentID: {
        type: Integer,
        required: true
    },
    Volunteers: {
        type: [Integer]
    },

    AffectedIndividual : {
        type: [Integer]
    },

    ApproximateaffectedCount : {
        type: Integer,
        required: true,
        default: 0
    },

    LocationID: {
        type: Integer,
        required: true
    },
    IncidentType: {
        type: String,
        enum: ['Fire', 'Flood', 'Cyclone', 'Earthquake', 'Others'],
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    CommunityID: {
        type: Integer,
        required: true
    },
    ReportedBy: {
        type: Integer,
        required: true
    },
    DateReported: {
        type: Date,
        required: true,
        default: Date.now
    },
    Urgency: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        required: true
    },
    Status: {
        type: String,
        enum: ['Running', 'Expired'],
        default: 'Running',
        required: true
    }
});

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;