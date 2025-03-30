"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TVChartContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const charting_library_esm_1 = require("../../charting_library/charting_library.esm");
function getLanguageFromURL() {
    const regex = new RegExp("[\\?&]lang=([^&#]*)");
    const results = regex.exec(window.location.search);
    return results === null
        ? null
        : decodeURIComponent(results[1].replace(/\+/g, " "));
}
const TVChartContainer = ({ height }) => {
    const chartContainerRef = (0, react_1.useRef)();
    const [scriptLoaded, setScriptLoaded] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const script = document.createElement("script");
        script.src = "datafeeds/udf/dist/bundle.js";
        script.async = true;
        script.onload = () => {
            setScriptLoaded(true);
        };
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const defaultProps = {
        symbol: "AAPL",
        interval: "D",
        datafeedUrl: "https://demo_feed.tradingview.com",
        // datafeedUrl: "http://localhost:5000/api",
        libraryPath: "/charting_library/",
        chartsStorageUrl: "https://saveload.tradingview.com",
        chartsStorageApiVersion: "1.1",
        clientId: "tradingview.com",
        userId: "public_user_id",
        theme: "dark",
        fullscreen: false,
        autosize: true,
        studiesOverrides: {},
    };
    (0, react_1.useEffect)(() => {
        if (scriptLoaded) {
            const widgetOptions = {
                symbol: defaultProps.symbol,
                // BEWARE: no trailing slash is expected in feed URL
                datafeed: new window.Datafeeds.UDFCompatibleDatafeed(defaultProps.datafeedUrl),
                interval: defaultProps.interval,
                container: chartContainerRef.current,
                library_path: defaultProps.libraryPath,
                theme: "dark",
                locale: getLanguageFromURL() || "en",
                disabled_features: ["use_localstorage_for_settings"],
                enabled_features: ["study_templates"],
                charts_storage_url: defaultProps.chartsStorageUrl,
                charts_storage_api_version: defaultProps.chartsStorageApiVersion,
                client_id: defaultProps.clientId,
                user_id: defaultProps.userId,
                fullscreen: defaultProps.fullscreen,
                autosize: defaultProps.autosize,
                studies_overrides: defaultProps.studiesOverrides,
            };
            const tvWidget = new charting_library_esm_1.widget(widgetOptions);
            tvWidget.onChartReady(() => {
                tvWidget.headerReady().then(() => {
                    const button = tvWidget.createButton();
                    button.setAttribute("title", "Click to show a notification popup");
                    button.classList.add("apply-common-tooltip");
                    button.addEventListener("click", () => tvWidget.showNoticeDialog({
                        title: "Notification",
                        body: "TradingView Charting Library API works correctly",
                        callback: () => {
                            console.log("Noticed!");
                        },
                    }));
                    button.innerHTML = "Check API";
                });
            });
            return () => {
                tvWidget.remove();
            };
        }
    }, [scriptLoaded]);
    (0, react_1.useEffect)(() => { }, []);
    return ((0, jsx_runtime_1.jsx)("div", { ref: chartContainerRef, className: "TVChartContainer", id: "tv_chart_container", style: { height: height + "vh" } }));
};
exports.TVChartContainer = TVChartContainer;
