const mongoose = require('mongoose');

const volunteerTaskSchema = new mongoose.Schema({
    TaskID: {
        type: Integer,
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
        required: true
    },
    DateCompleted: {
        type: Date
    }
});

const VolunteerTask = mongoose.model('VolunteerTask', volunteerTaskSchema);

module.exports = VolunteerTask;