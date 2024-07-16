const mongoose = require('mongoose');

const volunteerTaskSchema = new mongoose.Schema({
    TaskID: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    AssignedTo: {
        type: String,
        required: true
    },
    Volunteer: {
        ID: [Number]  // first name woulbe be the the leader name for particular volunteer task
    },
    IncidentID: {
        type: Interger,
        required: true
    },
    Status: {
        type: String,
        enum: ['Running', 'Completed'],
        required: true
    },
    AssignedDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    DateCompleted: {
        type: Date
    }
});

const VolunteerTask = mongoose.model('VolunteerTask', volunteerTaskSchema);

module.exports = VolunteerTask;