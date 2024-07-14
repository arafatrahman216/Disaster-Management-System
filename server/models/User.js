const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    UserID: {
        type: Integer,
        require: true
    },
    Name: {
        type: String,
        required: [true,"Name must be provided"]
    },
    Email: {
        type: String,
        required: [true,"Email must be provided"]
    },
    Phone: {
        type: [String], 
        required: [true,"Phone must be provided"],
        validate: {
            validator: function(value) {
                return /^\d{10}$/.test(value);
            },
            message: 'Phone must be a 10-digit number'
        }
    },
    Address: {
        type: String,
        required: [true,"Address must be provided"]
    },
    UserType: {
        type: [String],// string of arrays
        required: [true,"UserType must be provided, it is array of strings"],
        default: "affected", //admin, volunteer, donor, affected,
        enum : {
            values : ["admin","volunteer","donor","affected"],
            message : `UserType is not supported, must be of : admin, volunteer, donor, affected`
        }
    },
    Available: {
        type : Boolean,
        required: [true,"Availability must be provided"]
    },
    Community: {
        type: [Number], // array of integers
    },
    CreationTime: {
        type: Date,
        default: Date.now,
        required: true
    }
},);

module.exports = mongoose.model('User', UserSchema);