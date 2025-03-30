"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSavedTokens = exports.fetchAndSaveTokens = void 0;
const token_1 = __importDefault(require("../model/token"));
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_URL = process.env.THIRD_PARTY_API || "https://swap-api.thetatoken.org/swap/top-tokens";
const fetchAndSaveTokens = async (req, res) => {
    try {
        // Fetch data from the third-party API
        const response = await axios_1.default.get(API_URL);
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
        const formattedTokens = tokens.map((token) => ({
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
            await token_1.default.insertMany(formattedTokens, { ordered: false });
            console.log("✅ Tokens saved successfully");
        }
        catch (err) {
            if (err instanceof Error) {
                console.warn("⚠️ Some tokens may already exist:", err.message);
            }
            else {
                console.warn("⚠️ Some tokens may already exist, but an unknown error occurred.");
            }
        }
        // Return success response
        return res.status(201).json({ message: "Tokens saved successfully", count: formattedTokens.length });
    }
    catch (error) {
        // Handle unexpected errors
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("❌ Fetch Error:", errorMessage);
        return res.status(500).json({ message: "Error fetching/saving tokens", error: errorMessage });
    }
};
exports.fetchAndSaveTokens = fetchAndSaveTokens;
const getSavedTokens = async (req, res) => {
    try {
        // Retrieve all tokens from MongoDB
        const tokens = await token_1.default.find();
        return res.status(200).json(tokens);
    }
    catch (error) {
        // Handle unexpected errors
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("❌ Fetch Saved Tokens Error:", errorMessage);
        return res.status(500).json({ message: "Error fetching saved tokens", error: errorMessage });
    }
};
exports.getSavedTokens = getSavedTokens;
