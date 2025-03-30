"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UDFCompatibleDatafeed = void 0;
const udf_compatible_datafeed_base_1 = require("./udf-compatible-datafeed-base");
const quotes_provider_1 = require("./quotes-provider");
const requester_1 = require("./requester");
class UDFCompatibleDatafeed extends udf_compatible_datafeed_base_1.UDFCompatibleDatafeedBase {
    constructor(datafeedURL, updateFrequency = 10 * 1000, limitedServerResponse) {
        const requester = new requester_1.Requester();
        const quotesProvider = new quotes_provider_1.QuotesProvider(datafeedURL, requester);
        super(datafeedURL, quotesProvider, requester, updateFrequency, limitedServerResponse);
    }
}
exports.UDFCompatibleDatafeed = UDFCompatibleDatafeed;
