import { Request, Response } from "express";
import Token from "../model/token";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.THIRD_PARTY_API || "https://swap-api.thetatoken.org/swap/top-tokens";

interface TokenData {
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

export const fetchAndSaveTokens = async (req: Request, res: Response) => {
  try {
    // Fetch data from the third-party API
    const response = await axios.get(API_URL);

    // Log the full API response for debugging
    console.log("Full API Response:", JSON.stringify(response.data, null, 2));

    // Safely access the tokens array from the response
    const tokens = response.data?.body?.tokens;

    // Validate the tokens array
    if (!tokens || !Array.isArray(tokens)) {
      console.error("❌ Invalid data format:", response.data);
      return res.status(400).json({ message: "Invalid data format from API" });
    }

    // Map and format the tokens
    const formattedTokens = tokens.map((token: TokenData) => ({
      id: token.id,
      name: token.name,
      symbol: token.symbol,
      derivedETH: token.derivedETH,
      tradeVolume: token.tradeVolume,
      tradeVolumeETH: token.tradeVolumeETH,
      totalLiquidity: token.totalLiquidity,
      txCount: token.txCount,
      volume24HrsETH: token.volume24HrsETH,
      volume24HrsUSD: token.volume24HrsUSD,
      tradeVolumeUSD: token.tradeVolumeUSD,
      totalLiquidityUSD: token.totalLiquidityUSD,
      derivedUSD: token.derivedUSD,
    }));

    // Save tokens to MongoDB
    try {
      await Token.insertMany(formattedTokens, { ordered: false });
      console.log("✅ Tokens saved successfully");
    } catch (err) {
      if (err instanceof Error) {
        console.warn("⚠️ Some tokens may already exist:", err.message);
      } else {
        console.warn("⚠️ Some tokens may already exist, but an unknown error occurred.");
      }
    }

    // Return success response
    return res.status(201).json({ message: "Tokens saved successfully", count: formattedTokens.length });
  } catch (error: unknown) {
    // Handle unexpected errors
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("❌ Fetch Error:", errorMessage);
    return res.status(500).json({ message: "Error fetching/saving tokens", error: errorMessage });
  }
};

export const getSavedTokens = async (req: Request, res: Response) => {
  try {
    // Retrieve all tokens from MongoDB
    const tokens = await Token.find();
    return res.status(200).json(tokens);
  } catch (error: unknown) {
    // Handle unexpected errors
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("❌ Fetch Saved Tokens Error:", errorMessage);
    return res.status(500).json({ message: "Error fetching saved tokens", error: errorMessage });
  }
};