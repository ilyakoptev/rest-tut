const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema); // Posts - name of the schema in the database