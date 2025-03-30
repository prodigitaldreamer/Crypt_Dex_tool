"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenAction_1 = require("../actions/tokenAction");
const initialState = {
    loading: false,
    tokenList: [],
    error: null,
};
const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case tokenAction_1.FETCH_TOKEN_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case tokenAction_1.FETCH_TOKEN_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                tokenList: action.payload,
            };
        case tokenAction_1.FETCH_TOKEN_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
exports.default = tokenReducer;
