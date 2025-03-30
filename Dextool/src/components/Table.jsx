import React, { useEffect } from "react";
import { fetchSwapTransactionListRequest } from "../redux/actions/fetchSwapTrasactionAction";
import { useDispatch, useSelector } from "react-redux";
import {
  formatTimeDifference,
  formatNumber,
  checkTokenSymbol,
} from "../utils/funcs";
import "./style.css";

const Table = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the action to fetch token data
    dispatch(fetchSwapTransactionListRequest());
  }, [fetchSwapTransactionListRequest]);

  const swapTransactionList = useSelector(
    (state) => state.swapTransactionReducer.swapTransactionList
  );

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

  return (
    <div style={tableStyle}>
      <table
        className="custom-table"
        style={{
          width: "100%",
          marginRight: "0px",
          fontSize: "1.2rem",
        }}
      >
        <thead className="font-header">
          <tr>
            <th style={{ textAlign: "left", paddingLeft: "80px" }}>TIME</th>
            <th>TXN</th>
            <th>TYPE</th>
            <th>SWAP</th>
            <th style={textRight}>TOKEN AMOUNT</th>
            <th style={textRight}>TOKEN AMOUNT</th>
            <th style={{ textAlign: "right", paddingLeft: "80px" }}>
              USD VALUE
            </th>
          </tr>
        </thead>
        <tbody className="font-regular" style={{ backgroundColor: "black" }}>
          {swapTransactionList
            .filter((item) => item.type === "Swap")
            .map((rowData, index) => (
              <tr
                key={index}
                style={
                  rowData.amount0In * 1
                    ? { color: "#449782" }
                    : { color: "#cb4348" }
                }
              >
                <td style={{ textAlign: "left", paddingLeft: "80px" }}>
                  {formatTimeDifference(rowData.timestamp * 1)}
                </td>
                <td>
                  <a
                    href={`https://explorer.thetatoken.org/txs/${rowData.id}`}
                    target="_blank"
                  >
                    <span style={{ color: "grey" }}>
                      <i className="fa fa-share-from-square"></i>
                    </span>
                  </a>
                </td>
                <td>
                  {rowData.type !== "Swap"
                    ? rowData.type
                    : rowData.amount0In * 1
                    ? "Buy"
                    : "Sell"}
                </td>
                <td>{`${checkTokenSymbol(
                  rowData.symbol0
                )} to ${checkTokenSymbol(rowData.symbol1)}`}</td>
                <td style={textRight}>
                  {formatNumber(
                    rowData.amount0 * 1
                      ? rowData.amount0 * 1
                      : rowData.amount0In * 1 + rowData.amount0Out * 1
                  )}
                </td>
                <td style={textRight}>
                  {formatNumber(
                    rowData.amount1 * 1
                      ? rowData.amount1 * 1
                      : rowData.amount1In * 1 + rowData.amount1Out * 1
                  )}
                </td>
                <td style={{ textAlign: "right", paddingRight: "80px" }}>
                  {"$" + formatNumber(rowData.amountUSD * 1)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
