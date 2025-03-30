"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTokens = void 0;
const axios_1 = __importDefault(require("axios"));
const API_BASE_URL = "http://localhost:5000/api";
const saveTokens = async () => {
    return axios_1.default.post(`${API_BASE_URL}/tokens/save-tokens`);
};
exports.saveTokens = saveTokens;
