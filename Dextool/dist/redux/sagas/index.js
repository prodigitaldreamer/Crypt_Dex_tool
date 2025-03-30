"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const tokenSaga_1 = __importDefault(require("./tokenSaga"));
const fetchSwapTransactionSaga_1 = __importDefault(require("./fetchSwapTransactionSaga"));
function* rootSaga() {
    yield (0, effects_1.all)([
        // List of all your saga watchers
        (0, tokenSaga_1.default)(),
        // Add more saga watchers here if needed
        (0, fetchSwapTransactionSaga_1.default)(),
    ]);
}
exports.default = rootSaga;
