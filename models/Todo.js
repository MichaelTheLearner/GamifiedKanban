const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now(),
    },
    active: {
        type: Boolean,
        default: true,
    },
    cardID: {
        type: String,
        required: true,
    }
    

})

module.exports = mongoose.model('Todo', TodoSchema);