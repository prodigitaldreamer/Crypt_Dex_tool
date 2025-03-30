"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// Routes.js
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const MainContainer_1 = __importDefault(require("../containers/MainContainer"));
const DetailContainer_1 = __importDefault(require("../containers/DetailContainer"));
const AboutContainer_1 = __importDefault(require("../containers/AboutContainer"));
const NotfoundContainer_1 = __importDefault(require("../containers/NotfoundContainer"));
const RoutesComponent = () => {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(MainContainer_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/detail", element: (0, jsx_runtime_1.jsx)(DetailContainer_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/about", element: (0, jsx_runtime_1.jsx)(AboutContainer_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '*', element: (0, jsx_runtime_1.jsx)(NotfoundContainer_1.default, {}) })] }) }));
};
exports.default = RoutesComponent;
