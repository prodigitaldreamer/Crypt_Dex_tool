"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const TableHeader = ({ bgcolor, data }) => {
    (0, jsx_runtime_1.jsx)(material_1.TableHead, { sx: { width: "100%", backgroundColor: bgcolor }, children: (0, jsx_runtime_1.jsx)(material_1.TableRow, { sx: { width: "100%", justifyContent: "space-between", textAlign: "center" }, children: data.map(item => ((0, jsx_runtime_1.jsx)(material_1.TableCell, { children: item }))) }) });
};
exports.default = TableHeader;
