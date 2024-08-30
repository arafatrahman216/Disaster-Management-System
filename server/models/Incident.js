const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    IncidentID: {
        type: Number,
        required: true
    },
    Volunteers: {
        type: [Number]
    },

    AffectedIndividual : {
        type: [Number]
    },

    ApproximateaffectedCount : {
        type: Number,
        default: 0
    },

    LocationID: {
        type: Number,
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
        type: Number,
    },
    ReportedBy: {
        type: Number,
        required: false
    },
    DateReported: {
        type: Date,
        required: true,
        default: new Date().toISOString()+" " + (new Date().toLocaleTimeString())
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