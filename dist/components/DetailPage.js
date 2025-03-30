"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// DetailPage.js
const react_1 = __importDefault(require("react"));
const TopBar_1 = __importDefault(require("./TopBar"));
const DetailPage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(TopBar_1.default, {}), "DetailPage Component"] }));
};
exports.default = DetailPage;
