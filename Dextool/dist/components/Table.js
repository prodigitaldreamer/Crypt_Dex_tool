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
const fetchSwapTrasactionAction_1 = require("../redux/actions/fetchSwapTrasactionAction");
const react_redux_1 = require("react-redux");
const funcs_1 = require("../utils/funcs");
require("./style.css");
const Table = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        // Dispatch the action to fetch token data
        dispatch((0, fetchSwapTrasactionAction_1.fetchSwapTransactionListRequest)());
    }, [fetchSwapTrasactionAction_1.fetchSwapTransactionListRequest]);
    const swapTransactionList = (0, react_redux_1.useSelector)((state) => state.swapTransactionReducer.swapTransactionList);
    const tableStyle = {
        backgroundColor: "#191919",
        overflowY: "auto",
        maxHeight: "90vh",
        width: "100%",
        display: "flex",
        marginRight: "-100px",
        marginTop: "30px",
    };
    const rowStyle = {
        cursor: "pointer",
    };
    const textRight = {
        textAlign: "right",
    };
    return ((0, jsx_runtime_1.jsx)("div", { style: tableStyle, children: (0, jsx_runtime_1.jsxs)("table", { className: "custom-table", style: {
                width: "100%",
                marginRight: "0px",
                fontSize: "1.2rem",
            }, children: [(0, jsx_runtime_1.jsx)("thead", { className: "font-header", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { style: { textAlign: "left", paddingLeft: "80px" }, children: "TIME" }), (0, jsx_runtime_1.jsx)("th", { children: "TXN" }), (0, jsx_runtime_1.jsx)("th", { children: "TYPE" }), (0, jsx_runtime_1.jsx)("th", { children: "SWAP" }), (0, jsx_runtime_1.jsx)("th", { style: textRight, children: "TOKEN AMOUNT" }), (0, jsx_runtime_1.jsx)("th", { style: textRight, children: "TOKEN AMOUNT" }), (0, jsx_runtime_1.jsx)("th", { style: { textAlign: "right", paddingLeft: "80px" }, children: "USD VALUE" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { className: "font-regular", style: { backgroundColor: "black" }, children: swapTransactionList
                        .filter((item) => item.type === "Swap")
                        .map((rowData, index) => ((0, jsx_runtime_1.jsxs)("tr", { style: rowData.amount0In * 1
                            ? { color: "#449782" }
                            : { color: "#cb4348" }, children: [(0, jsx_runtime_1.jsx)("td", { style: { textAlign: "left", paddingLeft: "80px" }, children: (0, funcs_1.formatTimeDifference)(rowData.timestamp * 1) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("a", { href: `https://explorer.thetatoken.org/txs/${rowData.id}`, target: "_blank", children: (0, jsx_runtime_1.jsx)("span", { style: { color: "grey" }, children: (0, jsx_runtime_1.jsx)("i", { className: "fa fa-share-from-square" }) }) }) }), (0, jsx_runtime_1.jsx)("td", { children: rowData.type !== "Swap"
                                    ? rowData.type
                                    : rowData.amount0In * 1
                                        ? "Buy"
                                        : "Sell" }), (0, jsx_runtime_1.jsx)("td", { children: `${(0, funcs_1.checkTokenSymbol)(rowData.symbol0)} to ${(0, funcs_1.checkTokenSymbol)(rowData.symbol1)}` }), (0, jsx_runtime_1.jsx)("td", { style: textRight, children: (0, funcs_1.formatNumber)(rowData.amount0 * 1
                                    ? rowData.amount0 * 1
                                    : rowData.amount0In * 1 + rowData.amount0Out * 1) }), (0, jsx_runtime_1.jsx)("td", { style: textRight, children: (0, funcs_1.formatNumber)(rowData.amount1 * 1
                                    ? rowData.amount1 * 1
                                    : rowData.amount1In * 1 + rowData.amount1Out * 1) }), (0, jsx_runtime_1.jsx)("td", { style: { textAlign: "right", paddingRight: "80px" }, children: "$" + (0, funcs_1.formatNumber)(rowData.amountUSD * 1) })] }, index))) })] }) }));
};
exports.default = Table;
