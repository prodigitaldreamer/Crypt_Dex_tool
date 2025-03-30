const mongoose = require('mongoose');

const OhclSchema = new mongoose.Schema({
  time: {
    type: Number,
    required: true,
    unique: true
  },
  open: {
    type: String,
    required: true
  },
  high: {
    type: String,
    required: true
  },
  low: {
    type: String,
    required: true
  },
  close: {
    type: String,
    required: true
  },
  volume: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ohcl', OhclSchema);
