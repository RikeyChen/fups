const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FupSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Fup = mongoose.model('fup', FupSchema);