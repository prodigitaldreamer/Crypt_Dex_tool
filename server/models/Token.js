const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  derivedETH: {
    type: String,
    required: true
  },
  tradeVolume: {
    type: String,
    required: true
  },
  tradeVolumeETH: {
    type: String,
    required: true
  },
  untrackedVolumeETH: {
    type: String,
    required: true
  },
  totalLiquidity: {
    type: String,
    required: true
  },
  txCount: {
    type: String,
    required: true
  },
  volume24HrsETH: {
    type: Number,
    required: true
  },
  volume24HrsUSD: {
    type: Number,
    required: true
  },
  tradeVolumeUSD: {
    type: String,
    required: true
  },
  totalLiquidityUSD: {
    type: String,
    required: true
  },
  derivedUSD: {
    type: String,
    required: true
  },
  logo: {
    type: String
  },
  start_date: {
    type: Number
  },
  date: {
    type: Number
  }
});

module.exports = mongoose.model('token', TokenSchema);
