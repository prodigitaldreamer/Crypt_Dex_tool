"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const logo_png_1 = __importDefault(require("../assets/img/logo.png"));
const Topbar_Logo_png_1 = __importDefault(require("../assets/img/Topbar-Logo.png"));
require("./style.css");
const TopBar = () => {
    const theme = (0, material_1.useTheme)();
    const isMediumScreen = (0, material_1.useMediaQuery)(theme.breakpoints.up("md"));
    return ((0, jsx_runtime_1.jsx)(material_1.AppBar, { position: "relative", sx: {
            backgroundColor: "black",
            marginBottom: "15px",
            paddingX: "7vw",
            paddingY: "30px",
        }, children: (0, jsx_runtime_1.jsx)(material_1.Toolbar, { children: isMediumScreen ? ((0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, spacing: 3, alignItems: "center", justifyContent: "space-between", wrap: "nowrap", children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, children: (0, jsx_runtime_1.jsx)("img", { src: logo_png_1.default, alt: "Logo", style: { width: "90%", maxWidth: "300px" } }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, children: (0, jsx_runtime_1.jsx)("img", { src: Topbar_Logo_png_1.default, alt: "Topbar-Logo", style: { width: "100%", maxWidth: "728px" } }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, children: (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", className: "gradient-button" // Apply the gradient-button class
                            , href: "https://swap.thetatoken.org/swap" // Specify the URL of the external site
                            , target: "_blank" // Open the link in a new tab/window
                            , rel: "noopener noreferrer" // Add security attributes when opening in a new tab/window
                            , sx: { fontSize: "1vw", fontWeight: "bold" }, style: { padding: "0.5vw 1.8vw" }, children: "Trade on Thetaswap" }) })] })) : ((0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, alignItems: "center", spacing: 3, justifyContent: "space-between", children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 6, sx: { textAlign: "left" }, children: (0, jsx_runtime_1.jsx)("img", { src: logo_png_1.default, alt: "Logo", style: { width: "90%", maxWidth: "300px" } }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 6, sx: { textAlign: "right" }, children: (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", className: "gradient-button" // Apply the gradient-button class
                            , href: "https://swap.thetatoken.org/swap" // Specify the URL of the external site
                            , target: "_blank" // Open the link in a new tab/window
                            , rel: "noopener noreferrer" // Add security attributes when opening in a new tab/window
                            , sx: { fontSize: "2vw", fontWeight: "bold" }, style: { padding: "1.4vw 3.5vw", textAlign: "center" }, children: "Trade on Thetaswap" }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, children: (0, jsx_runtime_1.jsx)("img", { src: Topbar_Logo_png_1.default, alt: "Topbar-Logo", style: { width: "100%", maxWidth: "728px" } }) })] })) }) }));
};
exports.default = TopBar;
