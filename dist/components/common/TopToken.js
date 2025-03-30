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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const funcs_1 = require("../../utils/funcs");
const randomAvatar_1 = require("../../utils/randomAvatar");
const funcs_2 = require("../../utils/funcs");
const TopToken = ({ itemData }) => {
    const [imageExists, setImageExists] = (0, react_1.useState)(false);
    const tokenRef = (0, react_1.useRef)(null);
    // useEffect(() => {
    //   checkImg(
    //     `https://assets.thetatoken.org/tokens/${itemData.symbol.toLowerCase()}.png`
    //   )
    //     .then((exists) => {
    //       setImageExists(exists);
    //     })
    //     .catch((error) => {
    //       console.error("Error checking image:", error);
    //       setImageExists(false);
    //     });
    // }, [itemData.symbol]);
    (0, react_1.useEffect)(() => {
        const isOverflowed = tokenRef.current.scrollWidth > tokenRef.current.clientWidth;
        if (isOverflowed) {
            tokenRef.current.classList.add("overflowed");
        }
        else {
            tokenRef.current.classList.remove("overflowed");
        }
    }, [itemData.symbol]);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: tokenRef, className: "token-item font-header top-token", children: [(0, jsx_runtime_1.jsx)("div", { className: "token-element", children: itemData.num }), (0, jsx_runtime_1.jsx)("img", { className: "token-element", src: itemData.logo
                    ? `https://assets.thetatoken.org/tokens/${itemData.logo}`
                    : (0, randomAvatar_1.svg2img)(itemData), alt: itemData.symbol, style: imageExists
                    ? { width: ".9rem" }
                    : { width: ".9rem", borderRadius: "50%" } }), (0, jsx_runtime_1.jsx)("div", { className: "token-element", children: (0, funcs_2.removeW)(itemData.symbol) }), (0, jsx_runtime_1.jsx)("div", { className: "token-element-rate", style: { color: "#449782" }, children: "+" + itemData.riserate + "%" })] }));
};
exports.default = TopToken;
