"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTokenListFail = exports.fetchTokenListSuccess = exports.fetchTokenListRequest = exports.FETCH_TOKEN_LIST_FAIL = exports.FETCH_TOKEN_LIST_SUCCESS = exports.FETCH_TOKEN_LIST_REQUEST = void 0;
// Action Type
exports.FETCH_TOKEN_LIST_REQUEST = "FETCH_TOKEN_LIST_REQUEST";
exports.FETCH_TOKEN_LIST_SUCCESS = "FETCH_TOKEN_LIST_SUCCESS";
exports.FETCH_TOKEN_LIST_FAIL = "FETCH_TOKEN_LIST_FAIL";
// Action Creators
const fetchTokenListRequest = () => ({
    type: exports.FETCH_TOKEN_LIST_REQUEST,
});
exports.fetchTokenListRequest = fetchTokenListRequest;
const fetchTokenListSuccess = (data) => ({
    type: exports.FETCH_TOKEN_LIST_SUCCESS,
    payload: data,
});
exports.fetchTokenListSuccess = fetchTokenListSuccess;
const fetchTokenListFail = (error) => ({
    type: exports.FETCH_TOKEN_LIST_FAIL,
    payload: error,
});
exports.fetchTokenListFail = fetchTokenListFail;
