"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSwapTransactionListFail = exports.fetchSwapTransactionListSuccess = exports.fetchSwapTransactionListRequest = exports.FETCH_SWAP_TRANSACTION_LIST_FAIL = exports.FETCH_SWAP_TRANSACTION_LIST_SUCCESS = exports.FETCH_SWAP_TRANSACTION_LIST_REQUEST = void 0;
// Action Type
exports.FETCH_SWAP_TRANSACTION_LIST_REQUEST = "FETCH_SWAP_TRANSACTION_LIST_REQUEST";
exports.FETCH_SWAP_TRANSACTION_LIST_SUCCESS = "FETCH_SWAP_TRANSACTION_LIST_SUCCESS";
exports.FETCH_SWAP_TRANSACTION_LIST_FAIL = "FETCH_SWAP_TRANSACTION_LIST_FAIL";
// Action Creators
const fetchSwapTransactionListRequest = () => ({
    type: exports.FETCH_SWAP_TRANSACTION_LIST_REQUEST,
});
exports.fetchSwapTransactionListRequest = fetchSwapTransactionListRequest;
const fetchSwapTransactionListSuccess = (data) => ({
    type: exports.FETCH_SWAP_TRANSACTION_LIST_SUCCESS,
    payload: data,
});
exports.fetchSwapTransactionListSuccess = fetchSwapTransactionListSuccess;
const fetchSwapTransactionListFail = (error) => ({
    type: exports.FETCH_SWAP_TRANSACTION_LIST_FAIL,
    payload: error,
});
exports.fetchSwapTransactionListFail = fetchSwapTransactionListFail;
