const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({

    BookID: {
        type: Number,
        required: true
    }
},);

module.exports = mongoose.model('Book', BookSchema);