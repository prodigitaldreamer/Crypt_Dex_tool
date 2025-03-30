const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define TokenPair schema
const TokenPairSchema = new Schema({
  id: { type: String, required: true },
  txCount: { type: String, required: true },
  volumeETH: { type: String, required: true },
  volumeToken0: { type: String, required: true },
  volumeToken1: { type: String, required: true },
  reserve0: { type: String, required: true },
  reserve1: { type: String, required: true },
  reserveETH: { type: String, required: true },
  totalSupply: { type: String, required: true },
  token0: { type: Schema.Types.ObjectId, ref: 'token' },
  token1: { type: Schema.Types.ObjectId, ref: 'token' },
  token0Price: { type: String, required: true },
  volumeUSD: { type: Number, required: true },
  reserveUSD: { type: Number, required: true },
  volume24HrsETH: { type: Number, required: true },
  volume24HrsUSD: { type: Number, required: true },
  volume48HrsETH: { type: Number, required: true },
  volume48HrsUSD: { type: Number, required: true },
  volume7DaysETH: { type: Number, required: true },
  volume7DaysUSD: { type: Number, required: true }
});

// Create TokenPair model
const TokenPair = mongoose.model('TokenPair', TokenPairSchema);

module.exports = TokenPair;
