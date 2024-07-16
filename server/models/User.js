const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    UserID: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: [true,"Name must be provided"] ,
    },
    Email: {
        type: String,
        required: [true, "Email must be provided"],
        unique: true,
        validate: {
            validator: function(value) {
                // Email must be valid
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
            },
            message: 'Email must be valid'
        }
    },
    Phone: {
        type: String,
        required: [true, "Phone Number must be provided"],
        validate: {
            validator: function(value) {
                // Phone number must contain exactly 10 digits
                return /^\d{10}$/.test(value);
            },
            message: 'Phone number must contain exactly 10 digits'
        }
    },

    Password: {
        type: String,
        required: [true, "Password must be provided"],
        validate: {
            validator: function(value) {
                // Password must contain at least 8 characters, including at least one letter, one number, and one special character
                return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
            },
            message: 'Password must contain at least 8 characters, including at least one letter, one number, and one special character'
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
        type: [Number], // array of Numbers
    },
    CreationTime: {
        type: Date,
        default: Date.now,
        required: true
    }
},);

module.exports = mongoose.model('User', UserSchema);