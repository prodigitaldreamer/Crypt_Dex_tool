"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tokenController_1 = require("../controller/tokenController");
const router = express_1.default.Router();
router.get("/tokens/fetch", tokenController_1.fetchAndSaveTokens);
router.get("/tokens", tokenController_1.getSavedTokens);
exports.default = router;
