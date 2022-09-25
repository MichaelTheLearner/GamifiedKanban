const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    priority: {
        type: Boolean,
        default: false,
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
        default: [],
    }],
    createdDate: {
        type: Date,
        default: Date.now(),
    },  
    dueDate: {
        type: Date,
    },
    difficulty: {
        type: Number,
        default: 1,
        required: false,       
    },
    notes: {
        type: String,
        required: false,
    },
    columnID : {
        type: String,
        required: true,
    },
    repeat: {
        type: Boolean,
        default: false,
    }
}, { minimize: false })

module.exports = mongoose.model('Card', CardSchema);