"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// MainPage.js
const react_1 = __importDefault(require("react"));
const MainComponent_1 = __importDefault(require("./MainComponent"));
const Header_1 = require("./Header");
const TokenList_1 = require("./TokenList");
const Footer_1 = __importDefault(require("./Footer"));
const SaveToken_1 = __importDefault(require("./SaveToken"));
const MainPage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, {}), (0, jsx_runtime_1.jsx)(TokenList_1.TokenList, {}), (0, jsx_runtime_1.jsx)(MainComponent_1.default, {}), (0, jsx_runtime_1.jsx)(SaveToken_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = MainPage;
