"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UDFCompatibleDatafeedBase = exports.Constants = void 0;
const helpers_1 = require("./helpers");
const history_provider_1 = require("./history-provider");
const data_pulse_provider_1 = require("./data-pulse-provider");
const quotes_pulse_provider_1 = require("./quotes-pulse-provider");
const symbols_storage_1 = require("./symbols-storage");
var Constants;
(function (Constants) {
    Constants[Constants["SearchItemsLimit"] = 30] = "SearchItemsLimit";
})(Constants || (exports.Constants = Constants = {}));
function extractField(data, field, arrayIndex) {
    const value = data[field];
    return Array.isArray(value) ? value[arrayIndex] : value;
}
/**
 * This class implements interaction with UDF-compatible datafeed.
 * See [UDF protocol reference](@docs/connecting_data/UDF)
 */
class UDFCompatibleDatafeedBase {
    _configuration = defaultConfiguration();
    _datafeedURL;
    _configurationReadyPromise;
    _symbolsStorage = null;
    _historyProvider;
    _dataPulseProvider;
    _quotesProvider;
    _quotesPulseProvider;
    _requester;
    constructor(datafeedURL, quotesProvider, requester, updateFrequency = 10 * 1000, limitedServerResponse) {
        this._datafeedURL = datafeedURL;
        this._requester = requester;
        this._historyProvider = new history_provider_1.HistoryProvider(datafeedURL, this._requester, limitedServerResponse);
        this._quotesProvider = quotesProvider;
        this._dataPulseProvider = new data_pulse_provider_1.DataPulseProvider(this._historyProvider, updateFrequency);
        this._quotesPulseProvider = new quotes_pulse_provider_1.QuotesPulseProvider(this._quotesProvider);
        this._configurationReadyPromise = this._requestConfiguration()
            .then((configuration) => {
            if (configuration === null) {
                configuration = defaultConfiguration();
            }
            this._setupWithConfiguration(configuration);
        });
    }
    onReady(callback) {
        this._configurationReadyPromise.then(() => {
            callback(this._configuration);
        });
    }
    getQuotes(symbols, onDataCallback, onErrorCallback) {
        this._quotesProvider.getQuotes(symbols).then(onDataCallback).catch(onErrorCallback);
    }
    subscribeQuotes(symbols, fastSymbols, onRealtimeCallback, listenerGuid) {
        this._quotesPulseProvider.subscribeQuotes(symbols, fastSymbols, onRealtimeCallback, listenerGuid);
    }
    unsubscribeQuotes(listenerGuid) {
        this._quotesPulseProvider.unsubscribeQuotes(listenerGuid);
    }
    getMarks(symbolInfo, from, to, onDataCallback, resolution) {
        if (!this._configuration.supports_marks) {
            return;
        }
        const requestParams = {
            symbol: symbolInfo.ticker || '',
            from: from,
            to: to,
            resolution: resolution,
        };
        this._send('marks', requestParams)
            .then((response) => {
            if (!Array.isArray(response)) {
                const result = [];
                for (let i = 0; i < response.id.length; ++i) {
                    result.push({
                        id: extractField(response, 'id', i),
                        time: extractField(response, 'time', i),
                        color: extractField(response, 'color', i),
                        text: extractField(response, 'text', i),
                        label: extractField(response, 'label', i),
                        labelFontColor: extractField(response, 'labelFontColor', i),
                        minSize: extractField(response, 'minSize', i),
                        borderWidth: extractField(response, 'borderWidth', i),
                        hoveredBorderWidth: extractField(response, 'hoveredBorderWidth', i),
                        imageUrl: extractField(response, 'imageUrl', i),
                        showLabelWhenImageLoaded: extractField(response, 'showLabelWhenImageLoaded', i),
                    });
                }
                response = result;
            }
            onDataCallback(response);
        })
            .catch((error) => {
            (0, helpers_1.logMessage)(`UdfCompatibleDatafeed: Request marks failed: ${(0, helpers_1.getErrorMessage)(error)}`);
            onDataCallback([]);
        });
    }
    getTimescaleMarks(symbolInfo, from, to, onDataCallback, resolution) {
        if (!this._configuration.supports_timescale_marks) {
            return;
        }
        const requestParams = {
            symbol: symbolInfo.ticker || '',
            from: from,
            to: to,
            resolution: resolution,
        };
        this._send('timescale_marks', requestParams)
            .then((response) => {
            if (!Array.isArray(response)) {
                const result = [];
                for (let i = 0; i < response.id.length; ++i) {
                    result.push({
                        id: extractField(response, 'id', i),
                        time: extractField(response, 'time', i),
                        color: extractField(response, 'color', i),
                        label: extractField(response, 'label', i),
                        tooltip: extractField(response, 'tooltip', i),
                        imageUrl: extractField(response, 'imageUrl', i),
                        showLabelWhenImageLoaded: extractField(response, 'showLabelWhenImageLoaded', i),
                    });
                }
                response = result;
            }
            onDataCallback(response);
        })
            .catch((error) => {
            (0, helpers_1.logMessage)(`UdfCompatibleDatafeed: Request timescale marks failed: ${(0, helpers_1.getErrorMessage)(error)}`);
            onDataCallback([]);
        });
    }
    getServerTime(callback) {
        if (!this._configuration.supports_time) {
            return;
        }
        this._send('time')
            .then((response) => {
            const time = parseInt(response);
            if (!isNaN(time)) {
                callback(time);
            }
        })
            .catch((error) => {
            (0, helpers_1.logMessage)(`UdfCompatibleDatafeed: Fail to load server time, error=${(0, helpers_1.getErrorMessage)(error)}`);
        });
    }
    searchSymbols(userInput, exchange, symbolType, onResult) {
        if (this._configuration.supports_search) {
            const params = {
                limit: Constants.SearchItemsLimit,
                query: userInput.toUpperCase(),
                type: symbolType,
                exchange: exchange,
            };
            this._send('search', params)
                .then((response) => {
                if (response.s !== undefined) {
                    (0, helpers_1.logMessage)(`UdfCompatibleDatafeed: search symbols error=${response.errmsg}`);
                    onResult([]);
                    return;
                }
                onResult(response);
            })
                .catch((reason) => {
                (0, helpers_1.logMessage)(`UdfCompatibleDatafeed: Search symbols for '${userInput}' failed. Error=${(0, helpers_1.getErrorMessage)(reason)}`);
                onResult([]);
            });
        }
        else {
            if (this._symbolsStorage === null) {
                throw new Error('UdfCompatibleDatafeed: inconsistent configuration (symbols storage)');
            }
            this._symbolsStorage.searchSymbols(userInput, exchange, symbolType, Constants.SearchItemsLimit)
                .then(onResult)
                .catch(onResult.bind(null, []));
        }
    }
    resolveSymbol(symbolName, onResolve, onError, extension) {
        (0, helpers_1.logMessage)('Resolve requested');
        const currencyCode = extension && extension.currencyCode;
        const unitId = extension && extension.unitId;
        const resolveRequestStartTime = Date.now();
        function onResultReady(symbolInfo) {
            (0, helpers_1.logMessage)(`Symbol resolved: ${Date.now() - resolveRequestStartTime}ms`);
            onResolve(symbolInfo);
        }
        if (!this._configuration.supports_group_request) {
            const params = {
                symbol: symbolName,
            };
            if (currencyCode !== undefined) {
                params.currencyCode = currencyCode;
            }
            if (unitId !== undefined) {
                params.unitId = unitId;
            }
            this._send('symbols', params)
                .then((response) => {
                if (response.s !== undefined) {
                    onError('unknown_symbol');
                }
                else {
                    const symbol = response.name;
                    const listedExchange = response.listed_exchange ?? response['exchange-listed'];
                    const tradedExchange = response.exchange ?? response['exchange-traded'];
                    const result = {
                        ...response,
                        name: symbol,
                        base_name: [listedExchange + ':' + symbol],
                        listed_exchange: listedExchange,
                        exchange: tradedExchange,
                        ticker: response.ticker,
                        currency_code: response.currency_code ?? response['currency-code'],
                        original_currency_code: response.original_currency_code ?? response['original-currency-code'],
                        unit_id: response.unit_id ?? response['unit-id'],
                        original_unit_id: response.original_unit_id ?? response['original-unit-id'],
                        unit_conversion_types: response.unit_conversion_types ?? response['unit-conversion-types'],
                        has_intraday: response.has_intraday ?? response['has-intraday'] ?? false,
                        visible_plots_set: response.visible_plots_set ?? response['visible-plots-set'],
                        minmov: response.minmovement ?? response.minmov ?? 0,
                        minmove2: response.minmovement2 ?? response.minmove2,
                        session: response.session ?? response['session-regular'],
                        session_holidays: response.session_holidays ?? response['session-holidays'],
                        supported_resolutions: response.supported_resolutions ?? response['supported-resolutions'] ?? this._configuration.supported_resolutions ?? [],
                        has_daily: response.has_daily ?? response['has-daily'] ?? true,
                        intraday_multipliers: response.intraday_multipliers ?? response['intraday-multipliers'] ?? ['1', '5', '15', '30', '60'],
                        has_weekly_and_monthly: response.has_weekly_and_monthly ?? response['has-weekly-and-monthly'],
                        has_empty_bars: response.has_empty_bars ?? response['has-empty-bars'],
                        volume_precision: response.volume_precision ?? response['volume-precision'],
                        format: response.format ?? 'price',
                    };
                    onResultReady(result);
                }
            })
                .catch((reason) => {
                (0, helpers_1.logMessage)(`UdfCompatibleDatafeed: Error resolving symbol: ${(0, helpers_1.getErrorMessage)(reason)}`);
                onError('unknown_symbol');
            });
        }
        else {
            if (this._symbolsStorage === null) {
                throw new Error('UdfCompatibleDatafeed: inconsistent configuration (symbols storage)');
            }
            this._symbolsStorage.resolveSymbol(symbolName, currencyCode, unitId).then(onResultReady).catch(onError);
        }
    }
    getBars(symbolInfo, resolution, periodParams, onResult, onError) {
        this._historyProvider.getBars(symbolInfo, resolution, periodParams)
            .then((result) => {
            onResult(result.bars, result.meta);
        })
            .catch(onError);
    }
    subscribeBars(symbolInfo, resolution, onTick, listenerGuid, _onResetCacheNeededCallback) {
        this._dataPulseProvider.subscribeBars(symbolInfo, resolution, onTick, listenerGuid);
    }
    unsubscribeBars(listenerGuid) {
        this._dataPulseProvider.unsubscribeBars(listenerGuid);
    }
    _requestConfiguration() {
        return this._send('config')
            .catch((reason) => {
            (0, helpers_1.logMessage)(`UdfCompatibleDatafeed: Cannot get datafeed configuration - use default, error=${(0, helpers_1.getErrorMessage)(reason)}`);
            return null;
        });
    }
    _send(urlPath, params) {
        return this._requester.sendRequest(this._datafeedURL, urlPath, params);
    }
    _setupWithConfiguration(configurationData) {
        this._configuration = configurationData;
        if (configurationData.exchanges === undefined) {
            configurationData.exchanges = [];
        }
        if (!configurationData.supports_search && !configurationData.supports_group_request) {
            throw new Error('Unsupported datafeed configuration. Must either support search, or support group request');
        }
        if (configurationData.supports_group_request || !configurationData.supports_search) {
            this._symbolsStorage = new symbols_storage_1.SymbolsStorage(this._datafeedURL, configurationData.supported_resolutions || [], this._requester);
        }
        (0, helpers_1.logMessage)(`UdfCompatibleDatafeed: Initialized with ${JSON.stringify(configurationData)}`);
    }
}
exports.UDFCompatibleDatafeedBase = UDFCompatibleDatafeedBase;
function defaultConfiguration() {
    return {
        supports_search: false,
        supports_group_request: true,
        supported_resolutions: [
            '1',
            '5',
            '15',
            '30',
            '60',
            '1D',
            '1W',
            '1M',
        ],
        supports_marks: false,
        supports_timescale_marks: false,
    };
}
