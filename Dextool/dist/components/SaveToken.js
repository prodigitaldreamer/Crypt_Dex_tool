"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const SaveToken = () => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [message, setMessage] = (0, react_1.useState)("");
    const handleSaveTokens = async () => {
        setLoading(true);
        setMessage("");
        try {
            const response = await axios_1.default.post(`${process.env.REACT_APP_API_URL}/save`);
            setMessage("Tokens saved successfully!");
        }
        catch (error) {
            setMessage("Failed to save tokens.");
        }
        finally {
            setLoading(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleSaveTokens, disabled: loading, children: loading ? "Saving..." : "Save Tokens" }), message && (0, jsx_runtime_1.jsx)("p", { children: message })] }));
};
exports.default = SaveToken;
