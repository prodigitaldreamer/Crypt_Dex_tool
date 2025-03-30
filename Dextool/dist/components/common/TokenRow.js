"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const funcs_1 = require("../../utils/funcs");
const randomAvatar_1 = require("../../utils/randomAvatar");
const colors_1 = require("@mui/material/colors");
const funcs_2 = require("../../utils/funcs");
require("./style.css");
const TokenRow = ({ data }) => {
    const [imageExists, setImageExists] = (0, react_1.useState)(false);
    // useEffect(() => {
    //   checkImg(
    //     `https://assets.thetatoken.org/tokens/${data.symbol.toLowerCase()}.png`
    //   )
    //     .then((exists) => {
    //       setImageExists(exists);
    //     })
    //     .catch((error) => {
    //       console.error("Error checking image:", error);
    //       setImageExists(false);
    //     });
    // }, [data.symbol]);
    return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("td", { style: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-center",
                    paddingTop: "20px",
                    paddingBottom: "0px",
                    borderCollapse: "collapse",
                    borderColor: "black",
                    paddingLeft: "80px",
                    alignItems: "center",
                }, className: "token-header", children: [(0, jsx_runtime_1.jsx)("img", { src: data.logo
                            ? `https://assets.thetatoken.org/tokens/${data.logo}`
                            : (0, randomAvatar_1.svg2img)(data), style: data.logo
                            ? { width: "20px", marginRight: "10px" }
                            : { width: "20px", marginRight: "10px", borderRadius: "50%" } }), (0, jsx_runtime_1.jsx)("div", { className: "font-header", style: { marginRight: "3px" }, children: (0, funcs_2.removeW)(data.symbol) }), (0, jsx_runtime_1.jsx)("span", { className: "font-regular", style: {
                            fontSize: "small",
                            color: "#449782",
                        }, children: "+" +
                            (data.tradeVolumeETH * 1
                                ? (((data.volume24HrsETH * 1) / (data.tradeVolumeETH * 1)) *
                                    100).toFixed(2)
                                : "0") +
                            "%" })] }), (0, jsx_runtime_1.jsx)("td", { style: { textAlign: "start" }, className: "font-regular", children: "$" + data.derivedUSD }), (0, jsx_runtime_1.jsxs)("td", { style: { textAlign: "start" }, className: "font-regular", children: ["$", (0, funcs_1.formatNumber)(data.tradeVolumeUSD * 1)] }), (0, jsx_runtime_1.jsx)("td", { style: { textAlign: "start" }, className: "font-regular", children: "$" + (0, funcs_1.formatNumber)(data.totalLiquidityUSD * 1) }), (0, jsx_runtime_1.jsx)("td", { style: { textAlign: "start" }, className: "font-regular", children: "$" + (0, funcs_1.formatNumber)(data.tradeVolume * 1) }), (0, jsx_runtime_1.jsx)("td", { style: { textAlign: "start", paddingRight: "80px" }, className: "font-regular", children: "2yr 3mon" })] }));
};
exports.default = TokenRow;
