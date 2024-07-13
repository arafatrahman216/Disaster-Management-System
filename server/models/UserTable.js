const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    
    Name: {
        type: String,
        required: [true,"Name must be provided"]
    },
    Email: {
        type: String
    },
    Phone: {
        type: String
    },
    Address: {
        type: String
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
        type : Boolean
    }
})


module.exports = mongoose.model('User', UserSchema);