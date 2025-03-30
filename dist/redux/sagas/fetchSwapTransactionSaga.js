"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const api_1 = require("../../utils/api");
const axios_1 = __importDefault(require("axios"));
const fetchSwapTrasactionAction_1 = require("../actions/fetchSwapTrasactionAction");
function* fetchSwapTransactionList() {
    try {
        // Make an API request to fetch token data
        const response = yield axios_1.default.get("https://swap-api.thetatoken.org/swap/pair/0x2356d65ba95e9b8cbf5ff88841cb5a371dd6ec6a/transactions");
        // Dispatch success action with the received data
        yield (0, effects_1.put)((0, fetchSwapTrasactionAction_1.fetchSwapTransactionListSuccess)(response.data.body.transactions));
    }
    catch (error) {
        // Dispatch fail action with the error message
        yield (0, effects_1.put)((0, fetchSwapTrasactionAction_1.fetchSwapTransactionListFail)(error.message));
    }
}
// Watcher saga
function* swapTransactionSaga() {
    yield (0, effects_1.takeLatest)(fetchSwapTrasactionAction_1.FETCH_SWAP_TRANSACTION_LIST_REQUEST, fetchSwapTransactionList);
}
exports.default = swapTransactionSaga;
