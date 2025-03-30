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
exports.TokenList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const tokenAction_1 = require("../redux/actions/tokenAction");
const Tokenbar_Logo_png_1 = __importDefault(require("../assets/img/Tokenbar-Logo.png"));
const TopToken_1 = __importDefault(require("./common/TopToken"));
const TokenTable_1 = __importDefault(require("./TokenTable"));
const TopTokenList_1 = __importDefault(require("./common/TopTokenList"));
require("./style.css");
const material_1 = require("@mui/material");
const TokenList = () => {
    const theme = (0, material_1.createTheme)({
        // Define the theme within the component
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1160, // Change the value of lg breakpoint here
                xl: 1560,
            },
        },
    });
    const isLargeScreen = (0, material_1.useMediaQuery)(theme.breakpoints.up("lg")); // Use the theme with useMediaQuery
    const MediumScreen = (0, material_1.useMediaQuery)(theme.breakpoints.down("lg")); // Use the theme with useMediaQuery
    const [isMediumScreen, setIsMediumScreen] = (0, react_1.useState)(MediumScreen);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        // Dispatch the action to fetch token data
        dispatch((0, tokenAction_1.fetchTokenListRequest)());
    }, [tokenAction_1.fetchTokenListRequest]);
    const tokenList = (0, react_redux_1.useSelector)((state) => state.tokenReducer.tokenList);
    const loading = (0, react_redux_1.useSelector)((state) => state.tokenReducer.loading);
    const error = (0, react_redux_1.useSelector)((state) => state.tokenReducer.error);
    const [filteredTokenList, setFilteredTokenList] = (0, react_1.useState)([...tokenList]);
    const sortedTokenList = tokenList.sort((a, b) => (b.volume24HrsETH * 1) / (b.tradeVolumeETH * 1) -
        (a.volume24HrsETH * 1) / (a.tradeVolumeETH * 1));
    // Slice the sorted token list to display only the first 7 items
    const limitedTokenList = sortedTokenList.slice(0, 10).map((item, index) => {
        return {
            num: "#" + (index + 1),
            id: item.id,
            name: item.name,
            symbol: item.symbol,
            logo: item.logo,
            riserate: (((item.volume24HrsETH * 1) / (item.tradeVolumeETH * 1)) *
                100).toFixed(2),
        };
    });
    const [isEditing, setIsEditing] = (0, react_1.useState)(false);
    const [text, setText] = (0, react_1.useState)("Select Token/Contract Address ⌄");
    (0, react_1.useEffect)(() => {
        setFilteredTokenList([...tokenList]);
    }, [tokenList, isEditing]);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleInputChange = (e) => {
        setFilteredTokenList([...tokenList].filter((obj) => {
            // Check if any of the object's properties include the text
            return (obj.symbol.toLowerCase().includes(e.target.value.toLowerCase()) ||
                obj.id.toLowerCase().includes(e.target.value.toLowerCase()));
        }));
    };
    const divRef = (0, react_1.useRef)(null);
    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            // Clicked outside the div
            handleSaveClick();
        }
    };
    const handleSaveClick = () => {
        setIsEditing(false);
        setFilteredTokenList([...tokenList]);
        setText("Select Token/Contract Address ⌄");
        // Perform any save operation with the edited text here
    };
    (0, react_1.useEffect)(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "tokenlist-background font-header", children: [(0, jsx_runtime_1.jsx)("img", { src: Tokenbar_Logo_png_1.default, alt: "Token List Logo", className: "token-list-logo" }), (0, jsx_runtime_1.jsx)(TopTokenList_1.default, { tokenList: limitedTokenList }), (0, jsx_runtime_1.jsxs)("div", { className: "dropdown-container font-header", style: { position: "relative" }, children: [isEditing ? ((0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: text, className: "dropdown-button", onChange: handleInputChange, style: { fontFamily: "altivo" }, autoFocus // Automatically focus on the input field when it appears
                        : true })) : ((0, jsx_runtime_1.jsx)("button", { onClick: handleEditClick, className: "dropdown-button", style: { overflow: "hidden", fontFamily: "altivo" }, children: text })), isEditing && ((0, jsx_runtime_1.jsx)("div", { ref: divRef, style: {
                            position: "absolute",
                            top: "calc(45px)",
                            transform: "translateX(-50%)",
                            width: isLargeScreen ? "60vw" : "100vw",
                            backgroundColor: "#191919",
                            padding: "10px",
                            borderRadius: "5px",
                            zIndex: "50",
                            color: "white",
                            border: `2px solid transparent`,
                            left: isLargeScreen ? "-13vw" : "-37vw",
                        }, children: (0, jsx_runtime_1.jsx)(TokenTable_1.default, { tokenData: filteredTokenList }) }))] })] }));
};
exports.TokenList = TokenList;
