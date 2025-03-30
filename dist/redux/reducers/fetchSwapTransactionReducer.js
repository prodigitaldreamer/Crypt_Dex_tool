"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchSwapTrasactionAction_1 = require("../actions/fetchSwapTrasactionAction");
const initialState = {
    loading: false,
    swapTransactionList: [],
    error: null,
};
const swapTransactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchSwapTrasactionAction_1.FETCH_SWAP_TRANSACTION_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case fetchSwapTrasactionAction_1.FETCH_SWAP_TRANSACTION_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                swapTransactionList: action.payload,
            };
        case fetchSwapTrasactionAction_1.FETCH_SWAP_TRANSACTION_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
exports.default = swapTransactionReducer;
