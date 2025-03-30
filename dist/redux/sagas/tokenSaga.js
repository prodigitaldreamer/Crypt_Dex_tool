"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const api_1 = require("../../utils/api");
const axios_1 = __importDefault(require("axios"));
const tokenAction_1 = require("../actions/tokenAction");
function* fetchTokenList() {
    try {
        // Make an API request to fetch token data
        const response = yield axios_1.default.get("https://swap-api.thetatoken.org/swap/top-tokens");
        const fetchedTokens = response.data.body.tokens.filter((item) => item.totalLiquidityUSD * 1 > 0);
        const data = yield axios_1.default.get("https://assets.thetatoken.org/wallet-metadata/v1/data.json");
        const tokens = fetchedTokens.map((obj) => {
            const token = data.data.mainnet.tokens[Object.keys(data.data.mainnet.tokens).find((id) => id.toLocaleLowerCase() === obj.id)];
            if (token) {
                return { ...obj, logo: token.logo };
            }
            return obj;
        });
        yield (0, effects_1.put)((0, tokenAction_1.fetchTokenListSuccess)(tokens));
    }
    catch (error) {
        // Dispatch fail action with the error message
        yield (0, effects_1.put)((0, tokenAction_1.fetchTokenListFail)(error.message));
    }
}
// Watcher saga
function* tokenSaga() {
    yield (0, effects_1.takeLatest)(tokenAction_1.FETCH_TOKEN_LIST_REQUEST, fetchTokenList);
}
exports.default = tokenSaga;
