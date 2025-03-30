"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataFailure = exports.fetchDataSuccess = exports.fetchDataRequest = exports.FETCH_DATA_FAILURE = exports.FETCH_DATA_SUCCESS = exports.FETCH_DATA_REQUEST = void 0;
// Action types
exports.FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
exports.FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
exports.FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
// Action creators
const fetchDataRequest = () => ({
    type: exports.FETCH_DATA_REQUEST,
});
exports.fetchDataRequest = fetchDataRequest;
const fetchDataSuccess = (data) => ({
    type: exports.FETCH_DATA_SUCCESS,
    payload: data,
});
exports.fetchDataSuccess = fetchDataSuccess;
const fetchDataFailure = (error) => ({
    type: exports.FETCH_DATA_FAILURE,
    payload: error,
});
exports.fetchDataFailure = fetchDataFailure;
