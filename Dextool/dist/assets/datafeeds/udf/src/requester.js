"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requester = void 0;
const helpers_1 = require("./helpers");
class Requester {
    _headers;
    constructor(headers) {
        if (headers) {
            this._headers = headers;
        }
    }
    sendRequest(datafeedUrl, urlPath, params) {
        if (params !== undefined) {
            const paramKeys = Object.keys(params);
            if (paramKeys.length !== 0) {
                urlPath += '?';
            }
            urlPath += paramKeys.map((key) => {
                return `${encodeURIComponent(key)}=${encodeURIComponent(params[key].toString())}`;
            }).join('&');
        }
        (0, helpers_1.logMessage)('New request: ' + urlPath);
        // Send user cookies if the URL is on the same origin as the calling script.
        const options = { credentials: 'same-origin' };
        if (this._headers !== undefined) {
            options.headers = this._headers;
        }
        // eslint-disable-next-line no-restricted-globals
        return fetch(`${datafeedUrl}/${urlPath}`, options)
            .then((response) => response.text())
            .then((responseTest) => JSON.parse(responseTest));
    }
}
exports.Requester = Requester;
