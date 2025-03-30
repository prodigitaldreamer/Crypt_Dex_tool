"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const logo_png_1 = __importDefault(require("../assets/img/logo.png"));
const Topbar_Logo_png_1 = __importDefault(require("../assets/img/Topbar-Logo.png"));
require("./style.css");
require("../App.css");
const Header = () => {
    const theme = (0, material_1.createTheme)({
        // Define the theme within the component
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1360, // Change the value of lg breakpoint here
                xl: 1920,
            },
        },
    });
    const isLargeScreen = (0, material_1.useMediaQuery)(theme.breakpoints.up("lg")); // Use the theme with useMediaQuery
    return isLargeScreen ? ((0, jsx_runtime_1.jsx)("div", { className: "header-background", children: (0, jsx_runtime_1.jsxs)("div", { className: "header-justify", children: [(0, jsx_runtime_1.jsx)("img", { src: logo_png_1.default, alt: "Logo image", className: "logo-image" }), (0, jsx_runtime_1.jsx)("img", { src: Topbar_Logo_png_1.default, alt: "Header Logo image", className: "header-logo-image" }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", className: "gradient-button font-header flow-container" // Apply the gradient-button class
                    , href: "https://swap.thetatoken.org/swap" // Specify the URL of the external site
                    , target: "_blank" // Open the link in a new tab/window
                    , rel: "noopener noreferrer" // Add security attributes when opening in a new tab/window
                    , sx: {
                        paddingY: "10px",
                        wordWrap: "break-word",
                    }, children: (0, jsx_runtime_1.jsx)("div", { className: "not-flow-content font-header", children: "Trade on Thetaswap" }) })] }) })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "header-background", children: [(0, jsx_runtime_1.jsxs)("div", { className: "header-justify", style: { marginBottom: "20px" }, children: [(0, jsx_runtime_1.jsx)("img", { src: logo_png_1.default, alt: "Logo image", className: "logo-image", style: { width: "50%" } }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", className: "gradient-button font-header flow-container" // Apply the gradient-button class
                            , href: "https://swap.thetatoken.org/swap" // Specify the URL of the external site
                            , target: "_blank" // Open the link in a new tab/window
                            , rel: "noopener noreferrer" // Add security attributes when opening in a new tab/window
                            , sx: {
                                paddingY: "10px",
                                wordWrap: "break-word",
                                width: "50%",
                            }, children: (0, jsx_runtime_1.jsx)("div", { className: "not-flow-content font-header", children: "Trade on Thetaswap" }) })] }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", justifyContent: "center" }, children: (0, jsx_runtime_1.jsx)("img", { src: Topbar_Logo_png_1.default, alt: "Header Logo image", className: "header-logo-image" }) })] }) }));
};
exports.Header = Header;
