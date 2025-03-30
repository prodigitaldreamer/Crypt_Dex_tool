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
const TokenRow_1 = __importDefault(require("./common/TokenRow"));
require("./style.css");
const TokenTable = ({ tokenData }) => {
    const [sortedData, setSortedData] = (0, react_1.useState)([...tokenData]);
    const [sortConfig, setSortConfig] = (0, react_1.useState)({ key: null, direction: "asc" });
    const sortData = (key) => {
        let direction = "asc";
        if (sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === "asc") {
            direction = "desc";
        }
        const sorted = [...tokenData].sort((a, b) => {
            if (a[key] * 1 < b[key] * 1) {
                return direction === "asc" ? -1 : 1;
            }
            if (a[key] * 1 > b[key] * 1) {
                return direction === "asc" ? 1 : -1;
            }
            return 0;
        });
        setSortedData([...sorted]);
        setSortConfig({ key, direction });
    };
    const renderSortIcon = (columnName) => {
        if (sortConfig && sortConfig.key === columnName) {
            return sortConfig.direction === "asc" ? "▲" : "▼";
        }
        return null;
    };
    const tableStyle = {
        backgroundColor: "#191919",
        overflowY: "auto",
        maxHeight: "90vh",
        width: "100%",
        cursor: "pointer",
    };
    (0, react_1.useEffect)(() => {
        setSortedData(tokenData);
    }, [tokenData]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "table-container font-header", style: tableStyle, children: (0, jsx_runtime_1.jsxs)("table", { className: "custom-table", style: {
                width: "100%",
                marginTop: "15px",
                marginBottom: "20px",
                fontSize: "medium",
            }, children: [(0, jsx_runtime_1.jsx)("thead", { className: "font-header", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { onClick: () => sortData("symbol"), style: { textAlign: "start" }, children: ["TOKEN ", renderSortIcon("symbol")] }), (0, jsx_runtime_1.jsxs)("th", { onClick: () => sortData("derivedUSD"), style: { textAlign: "start" }, children: ["PRICE ", renderSortIcon("derivedUSD")] }), (0, jsx_runtime_1.jsxs)("th", { onClick: () => sortData("tradeVolumeUSD"), style: { textAlign: "start" }, children: ["MARKETCAP ", renderSortIcon("tradeVolumeUSD")] }), (0, jsx_runtime_1.jsxs)("th", { onClick: () => sortData("totalLiquidityUSD"), style: { textAlign: "start" }, children: ["LIQUIDITY ", renderSortIcon("totalLiquidityUSD")] }), (0, jsx_runtime_1.jsxs)("th", { onClick: () => sortData("tradeVolume"), style: { textAlign: "start" }, children: ["VOLUME ", renderSortIcon("tradeVolume")] }), (0, jsx_runtime_1.jsx)("th", { style: { textAlign: "start", paddingRight: "80px" }, children: "TOKEN AGE" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { style: { backgroundColor: "black" }, children: [...sortedData].map((rowData, index) => ((0, jsx_runtime_1.jsx)(TokenRow_1.default, { data: rowData }, index))) })] }) }));
};
exports.default = TokenTable;
