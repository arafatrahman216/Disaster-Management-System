const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    IncidentID: {
        type: Integer,
        required: true
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
        required: true
    },
    Urgency: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        required: true
    },
    Status: {
        type: String,
        required: true
    }
});

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;