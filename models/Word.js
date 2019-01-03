const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema ({
  word: {
    type: String
  },
  fup: {
    type: Schema.Types.ObjectId,
    ref: 'fups'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  type: {
    type: String
  },
  score: {
    type: Number
  },
  magnitiude: {
    type: Number
  },
  salience: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Word = mongoose.model('word', WordSchema);