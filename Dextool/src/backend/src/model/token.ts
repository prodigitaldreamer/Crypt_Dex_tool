import mongoose, { Schema, Document } from "mongoose";

export interface IToken extends Document {
  id: string;
  name: string;
  symbol: string;
  derivedETH: string;
  tradeVolume: string;
  tradeVolumeETH: string;
  totalLiquidity: string;
  txCount: string;
  volume24HrsETH: number;
  volume24HrsUSD: number;
  tradeVolumeUSD: string;
  totalLiquidityUSD: string;
  derivedUSD: string;
}

const TokenSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  derivedETH: { type: String },
  tradeVolume: { type: String },
  tradeVolumeETH: { type: String },
  totalLiquidity: { type: String },
  txCount: { type: String },
  volume24HrsETH: { type: Number },
  volume24HrsUSD: { type: Number },
  tradeVolumeUSD: { type: String },
  totalLiquidityUSD: { type: String },
  derivedUSD: { type: String },
});

export default mongoose.model<IToken>("Token", TokenSchema);