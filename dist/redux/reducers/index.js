"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const tokenReducer_1 = __importDefault(require("./tokenReducer"));
const fetchSwapTransactionReducer_1 = __importDefault(require("./fetchSwapTransactionReducer"));
const rootReducer = (0, redux_1.combineReducers)({
    tokenReducer: tokenReducer_1.default, // Add your reducers here
    swapTransactionReducer: // Add your reducers here
    fetchSwapTransactionReducer_1.default
});
exports.default = rootReducer;
