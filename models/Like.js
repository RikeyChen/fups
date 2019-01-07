const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LikeSchema = new Schema({
  fup: {
    type: Schema.Types.ObjectId,
    ref: 'fups',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Like = mongoose.model('likes', LikeSchema);
