import express from "express";
import { fetchAndSaveTokens, getSavedTokens } from "../controller/tokenController";

const router = express.Router();

// Route to save tokens
router.post("/tokens/save", fetchAndSaveTokens);

// Route to get saved tokens
router.get("/tokens", getSavedTokens);

export default router;