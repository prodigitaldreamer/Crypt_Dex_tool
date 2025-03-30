import React, { useEffect, useRef, useState } from "react";
import { widget } from "../../charting_library/charting_library.esm";

function getLanguageFromURL() {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export const TVChartContainer = ({ height }) => {
  const chartContainerRef = useRef();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
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

  useEffect(() => {
    if (scriptLoaded) {
      const widgetOptions = {
        symbol: defaultProps.symbol,
        // BEWARE: no trailing slash is expected in feed URL
        datafeed: new window.Datafeeds.UDFCompatibleDatafeed(
          defaultProps.datafeedUrl
        ),
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

      const tvWidget = new widget(widgetOptions);

      tvWidget.onChartReady(() => {
        tvWidget.headerReady().then(() => {
          const button = tvWidget.createButton();
          button.setAttribute("title", "Click to show a notification popup");
          button.classList.add("apply-common-tooltip");
          button.addEventListener("click", () =>
            tvWidget.showNoticeDialog({
              title: "Notification",
              body: "TradingView Charting Library API works correctly",
              callback: () => {
                console.log("Noticed!");
              },
            })
          );

          button.innerHTML = "Check API";
        });
      });

      return () => {
        tvWidget.remove();
      };
    }
  }, [scriptLoaded]);

  useEffect(() => {}, []);

  return (
    <div
      ref={chartContainerRef}
      className={"TVChartContainer"}
      id="tv_chart_container"
      style={{ height: height + "vh" }}
    />
  );
};
