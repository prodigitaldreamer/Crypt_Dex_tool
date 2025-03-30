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
const TopToken_1 = __importDefault(require("./common/TopToken"));
const react_redux_1 = require("react-redux");
const tokenAction_1 = require("../redux/actions/tokenAction");
const TokenTable_1 = __importDefault(require("./TokenTable"));
const Tokenbar_Logo_png_1 = __importDefault(require("../assets/img/Tokenbar-Logo.png"));
const TokenBar = () => {
    const theme = (0, material_1.useTheme)();
    const isMediumScreen = (0, material_1.useMediaQuery)(theme.breakpoints.down("md"));
    const isLargeScreen = (0, material_1.useMediaQuery)(theme.breakpoints.up("md")); // Check if screen is larger than medium
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        // Dispatch the action to fetch token data
        dispatch((0, tokenAction_1.fetchTokenListRequest)());
    }, [tokenAction_1.fetchTokenListRequest]);
    const tokenList = (0, react_redux_1.useSelector)((state) => state.tokenReducer.tokenList);
    const loading = (0, react_redux_1.useSelector)((state) => state.tokenReducer.loading);
    const error = (0, react_redux_1.useSelector)((state) => state.tokenReducer.error);
    const [isDivVisible, setIsDivVisible] = (0, react_1.useState)(false);
    const toggleDivVisibility = () => {
        setIsDivVisible(!isDivVisible);
    };
    const sortedTokenList = tokenList.sort((a, b) => (b.volume24HrsETH * 1) / (b.tradeVolumeETH * 1) -
        (a.volume24HrsETH * 1) / (a.tradeVolumeETH * 1));
    // Slice the sorted token list to display only the first 7 items
    const limitedTokenList = sortedTokenList.slice(0, 7).map((item, index) => {
        return {
            num: "#" + (index + 1),
            symbol: item.symbol,
            riserate: (((item.volume24HrsETH * 1) / (item.tradeVolumeETH * 1)) *
                100).toFixed(2),
        };
    });
    return ((0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, spacing: 4, alignItems: "center", sx: {
            backgroundColor: "#191919",
            paddingLeft: "7vw",
            paddingRight: "7vw",
        }, children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: isMediumScreen ? 12 : 2, display: "flex", justifyContent: "center", children: (0, jsx_runtime_1.jsx)("img", { src: Tokenbar_Logo_png_1.default, width: "100%", height: 50, className: "gradient-skeleton" }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: isMediumScreen ? 12 : 8, sx: { overflowX: "auto", cursor: "pointer" }, children: (0, jsx_runtime_1.jsx)(material_1.Grid, { container: true, spacing: 2, alignItems: "center", wrap: "nowrap", children: limitedTokenList.map((item, index) => ((0, jsx_runtime_1.jsx)(TopToken_1.default, { itemData: item }, index))) }) }), (0, jsx_runtime_1.jsxs)(material_1.Grid, { item: true, xs: 12, sm: isMediumScreen ? 12 : 2, display: "flex", justifyContent: "center", sx: { position: "relative" }, children: [(0, jsx_runtime_1.jsxs)(material_1.Button, { variant: "outlined", color: "primary", sx: {
                            textTransform: "none",
                            color: "white",
                            borderColor: "white",
                            padding: "0.5vw",
                            display: "flex",
                            textWrap: "nowrap",
                            overflow: "hidden",
                            "&:hover": {
                                backgroundColor: "white",
                                color: "black",
                                borderColor: "white",
                            },
                        }, onClick: toggleDivVisibility, children: ["Select Token/Contract Address", (0, jsx_runtime_1.jsx)(icons_material_1.ArrowDownward, {})] }), isDivVisible && ((0, jsx_runtime_1.jsx)("div", { style: {
                            position: "absolute",
                            top: "calc(26% + 50px)",
                            transform: "translateX(-50%)",
                            width: isLargeScreen ? "60vw" : "90vw",
                            backgroundColor: "#191919",
                            padding: "10px",
                            borderRadius: "5px",
                            zIndex: "50",
                            color: "white",
                            border: `2px solid transparent`, // Set border color to primary color
                            right: "-30vw",
                        }, children: (0, jsx_runtime_1.jsx)(TokenTable_1.default, { tokenData: tokenList }) }))] })] }));
};
exports.default = TokenBar;
