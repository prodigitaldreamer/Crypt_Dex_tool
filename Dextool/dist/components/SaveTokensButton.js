"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// filepath: frontend/src/components/SaveTokensButton.tsx
const react_1 = require("react");
const apiService_1 = require("../../src/components/services/apiService");
const SaveTokensButton = () => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [successMessage, setSuccessMessage] = (0, react_1.useState)("");
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    const handleSaveTokens = async () => {
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");
        try {
            const response = await (0, apiService_1.saveTokens)();
            if (response.status === 200) {
                setSuccessMessage("Tokens saved successfully!");
            }
            else {
                setErrorMessage("Failed to save tokens. Please try again.");
            }
        }
        catch (error) {
            setErrorMessage("An error occurred while saving tokens.");
        }
        finally {
            setLoading(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "save-tokens-container", children: [(0, jsx_runtime_1.jsx)("button", { className: "save-tokens-button", onClick: handleSaveTokens, disabled: loading, children: loading ? "Saving..." : "Save Tokens" }), successMessage && (0, jsx_runtime_1.jsx)("p", { className: "success-message", children: successMessage }), errorMessage && (0, jsx_runtime_1.jsx)("p", { className: "error-message", children: errorMessage })] }));
};
exports.default = SaveTokensButton;
