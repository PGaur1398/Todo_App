const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    checkbox:{
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Todo_Tasks', tasksSchema);

