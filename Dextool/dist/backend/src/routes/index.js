"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tokenController_1 = require("../controller/tokenController");
const router = express_1.default.Router();
// Route to save tokens
router.post("/tokens/save", tokenController_1.fetchAndSaveTokens);
// Route to get saved tokens
router.get("/tokens", tokenController_1.getSavedTokens);
exports.default = router;
