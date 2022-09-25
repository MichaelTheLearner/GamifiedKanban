const mongoose = require("mongoose");

const ColumnSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Click here to change Title",
    required: true,  
  },
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Todo',
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  }
}, { minimize: false });

module.exports = mongoose.model("Column", ColumnSchema);