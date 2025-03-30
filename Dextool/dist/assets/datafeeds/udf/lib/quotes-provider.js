"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesProvider = void 0;
const helpers_1 = require("./helpers");
class QuotesProvider {
    constructor(datafeedUrl, requester) {
        this._datafeedUrl = datafeedUrl;
        this._requester = requester;
    }
    getQuotes(symbols) {
        return new Promise((resolve, reject) => {
            this._requester.sendRequest(this._datafeedUrl, 'quotes', { symbols: symbols })
                .then((response) => {
                if (response.s === 'ok') {
                    resolve(response.d);
                }
                else {
                    reject(response.errmsg);
                }
            })
                .catch((error) => {
                const errorMessage = (0, helpers_1.getErrorMessage)(error);
                (0, helpers_1.logMessage)(`QuotesProvider: getQuotes failed, error=${errorMessage}`);
                reject(`network error: ${errorMessage}`);
            });
        });
    }
}
exports.QuotesProvider = QuotesProvider;
