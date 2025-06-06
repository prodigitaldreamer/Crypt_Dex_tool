"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMessage = logMessage;
exports.getErrorMessage = getErrorMessage;
/**
 * If you want to enable logs from datafeed set it to `true`
 */
const isLoggingEnabled = false;
function logMessage(message) {
    if (isLoggingEnabled) {
        const now = new Date();
        // tslint:disable-next-line:no-console
        console.log(`${now.toLocaleTimeString()}.${now.getMilliseconds()}> ${message}`);
    }
}
function getErrorMessage(error) {
    if (error === undefined) {
        return '';
    }
    else if (typeof error === 'string') {
        return error;
    }
    return error.message;
}
