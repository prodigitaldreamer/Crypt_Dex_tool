"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tokenController_1 = require("./../controllers/tokenController");
const router = express_1.default.Router();
// POST /api/tokens/save
router.post("/save", tokenController_1.saveTokens);
exports.default = router;
