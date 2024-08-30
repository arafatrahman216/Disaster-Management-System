const mongoose = require('mongoose');

const ForumSchema = new mongoose.Schema({

    PostID: {
        type: Number,
        required: true
    },
    UserID: {
        type: Number,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Content: {
        type: String,
        required: true
    },
    DatePosted: {
        type: Date,
        required: true , 
        default: Date.now
    },
    CommunityID: {
        type: Number,
        required: true
    },
    LikedBy : {
        type: [Number],
    }

},);

module.exports = mongoose.model('Forum', ForumSchema);