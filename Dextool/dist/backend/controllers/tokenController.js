"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTokens = void 0;
const axios_1 = __importDefault(require("axios"));
const tokenModel_1 = require("./../models/tokenModel");
const THIRD_PARTY_API = "https://swap-api.thetatoken.org/swap/top-tokens";
// Fetch and save tokens
const saveTokens = async (req, res) => {
    try {
        // Fetch tokens from third-party API
        const response = await axios_1.default.get(THIRD_PARTY_API);
        const tokens = response.data;
        if (!Array.isArray(tokens)) {
            return res.status(500).json({ message: "Invalid data format from API" });
        }
        // Save tokens to MongoDB
        const savedTokens = await tokenModel_1.Token.insertMany(tokens.map((token) => ({
            name: token.name,
            symbol: token.symbol,
            price: token.price,
        })));
        res.status(200).json({ message: "Tokens saved successfully", savedTokens });
    }
    catch (error) {
        console.error("Error saving tokens:", error);
        res.status(500).json({ message: "Failed to save tokens", error });
    }
};
exports.saveTokens = saveTokens;
