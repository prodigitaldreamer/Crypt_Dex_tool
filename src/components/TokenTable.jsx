import React, { useEffect, useState } from "react";
import TokenRow from "./common/TokenRow";
import "./style.css";

const TokenTable = ({ tokenData }) => {
  const [sortedData, setSortedData] = useState([...tokenData]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortData = (key) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
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
  useEffect(() => {
    setSortedData(tokenData);
  }, [tokenData]);
  return (
    <div className="table-container font-header" style={tableStyle}>
      <table
        className="custom-table"
        style={{
          width: "100%",
          marginTop: "15px",
          marginBottom: "20px",
          fontSize: "medium",
        }}
      >
        <thead className="font-header">
          <tr>
            <th
              onClick={() => sortData("symbol")}
              style={{ textAlign: "start" }}
            >
              TOKEN {renderSortIcon("symbol")}
            </th>
            <th
              onClick={() => sortData("derivedUSD")}
              style={{ textAlign: "start" }}
            >
              PRICE {renderSortIcon("derivedUSD")}
            </th>
            <th
              onClick={() => sortData("tradeVolumeUSD")}
              style={{ textAlign: "start" }}
            >
              MARKETCAP {renderSortIcon("tradeVolumeUSD")}
            </th>
            <th
              onClick={() => sortData("totalLiquidityUSD")}
              style={{ textAlign: "start" }}
            >
              LIQUIDITY {renderSortIcon("totalLiquidityUSD")}
            </th>
            <th
              onClick={() => sortData("tradeVolume")}
              style={{ textAlign: "start" }}
            >
              VOLUME {renderSortIcon("tradeVolume")}
            </th>
            <th style={{ textAlign: "start", paddingRight: "80px" }}>
              TOKEN AGE
            </th>
            {/* <th>Token Age</th> */}
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "black" }}>
          {[...sortedData].map((rowData, index) => (
            <TokenRow data={rowData} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenTable;
