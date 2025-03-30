"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
const TVChartContainer_1 = require("./common/TVChartContainer");
const Table_1 = __importDefault(require("./Table"));
require("./style.css");
const MainComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = (0, react_1.useState)(true);
    const theme = (0, material_1.useTheme)();
    const isLargeScreen = (0, material_1.useMediaQuery)(theme.breakpoints.up("md")); // Check if screen is larger than medium
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, spacing: 2, sx: {
            backgroundColor: "#191919",
            paddingRight: "7vw",
        }, children: [(0, jsx_runtime_1.jsxs)(material_1.Grid, { item: true, xs: isMenuOpen ? 9 : 12, sx: { transition: "width 0.5s", position: "relative" }, children: [(0, jsx_runtime_1.jsx)(TVChartContainer_1.TVChartContainer, { height: isMenuOpen ? 70 : 70 }), (0, jsx_runtime_1.jsx)(Table_1.default, { height: isMenuOpen ? 70 : 90 }), isLargeScreen && ((0, jsx_runtime_1.jsx)("button", { className: "menubutton", onClick: toggleMenu, children: (0, jsx_runtime_1.jsx)("div", { style: { marginTop: "-35%" }, children: isMenuOpen ? "›" : "‹" }) }))] }), isMenuOpen && (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 3, className: "font-header" })] }));
};
exports.default = MainComponent;
