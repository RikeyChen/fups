const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema ({
  word: {
    type: String,
    requied: true
  },
  user: {
    type: Schema.Types.ObjectIdId,
    ref: 'users'
  },
  type: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  magnitiude: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Fup = mongoose.model('word', WordSchema);