"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const routes_1 = __importDefault(require("./routes"));
const react_helmet_1 = require("react-helmet");
const wtheta_png_1 = __importDefault(require("./assets/img/tokens/wtheta.png"));
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [(0, jsx_runtime_1.jsx)("title", { children: "Theta Screener" }), (0, jsx_runtime_1.jsx)("link", { rel: "icon", type: "image/png", href: wtheta_png_1.default, sizes: "16x16" })] }), (0, jsx_runtime_1.jsx)(routes_1.default, {})] }));
}
exports.default = App;
