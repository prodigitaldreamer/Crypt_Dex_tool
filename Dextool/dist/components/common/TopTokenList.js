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
require("./style.css"); // Import your CSS file
const TopToken_1 = __importDefault(require("./TopToken")); // Import the TopToken component
const classnames_1 = __importDefault(require("classnames"));
const TopTokenList = ({ tokenList }) => {
    const listRef = (0, react_1.useRef)(null);
    const [isOverflowed, setIsOverFlowed] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const listElement = listRef.current;
        setIsOverFlowed(listElement.scrollWidth > listElement.clientWidth);
    }, [tokenList, isOverflowed]);
    return ((0, jsx_runtime_1.jsx)("div", { ref: listRef, className: "tokenlist-body", children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)({ tokenlist: 1, overflowed: isOverflowed }), children: tokenList.map((item, index) => ((0, jsx_runtime_1.jsx)(TopToken_1.default, { itemData: item }, index))) }) }));
};
exports.default = TopTokenList;
