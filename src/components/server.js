const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/tokensDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const tokenSchema = new mongoose.Schema({
  id: String,
  name: String,
  symbol: String,
  derivedETH: String,
  tradeVolume: String,
  tradeVolumeETH: String,
  totalLiquidity: String,
  txCount: String,
  volume24HrsETH: Number,
  volume24HrsUSD: Number,
  txCount24Hrs: Number,
  tradeVolumeUSD: String,
  totalLiquidityUSD: String,
  derivedUSD: String,
});

const Token = mongoose.model("Token", tokenSchema);

// Save tokens
app.get("/save-tokens", async (req, res) => {
  try {
    const response = await fetch("https://swap-api.thetatoken.org/swap/top-tokens");
    const data = await response.json();
    const tokens = data.body.tokens;

    await Token.insertMany(tokens);
    res.json({ message: "Tokens saved successfully!" });
  } catch (error) {
    console.error("Error fetching tokens:", error);
    res.status(500).json({ message: "Failed to fetch tokens" });
  }
});

// Get saved tokens
app.get("/get-tokens", async (req, res) => {
  try {
    const tokens = await Token.find();
    res.json(tokens);
  } catch (error) {
    console.error("Error retrieving tokens:", error);
    res.status(500).json({ message: "Failed to retrieve tokens" });
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
