import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTokenListRequest } from "../redux/actions/tokenAction";
import TokenListLogo from "../assets/img/Tokenbar-Logo.png";
import TopToken from "./common/TopToken";
import TokenTable from "./TokenTable";
import TopTokenList from "./common/TopTokenList";
import "./style.css";
import { createTheme, useMediaQuery } from "@mui/material";

const TokenList = () => {
  const theme = createTheme({
    // Define the theme within the component
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1160, // Change the value of lg breakpoint here
        xl: 1560,
      },
    },
  });

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // Use the theme with useMediaQuery
  const MediumScreen = useMediaQuery(theme.breakpoints.down("lg")); // Use the theme with useMediaQuery

  const [isMediumScreen, setIsMediumScreen] = useState(MediumScreen);

  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the action to fetch token data
    dispatch(fetchTokenListRequest());
  }, [fetchTokenListRequest]);

  const tokenList = useSelector((state) => state.tokenReducer.tokenList);
  const loading = useSelector((state) => state.tokenReducer.loading);
  const error = useSelector((state) => state.tokenReducer.error);

  const [filteredTokenList, setFilteredTokenList] = useState([...tokenList]);

  const sortedTokenList = tokenList.sort(
    (a, b) =>
      (b.volume24HrsETH * 1) / (b.tradeVolumeETH * 1) -
      (a.volume24HrsETH * 1) / (a.tradeVolumeETH * 1)
  );

  // Slice the sorted token list to display only the first 7 items
  const limitedTokenList = sortedTokenList.slice(0, 10).map((item, index) => {
    return {
      num: "#" + (index + 1),
      id: item.id,
      name: item.name,
      symbol: item.symbol,
      logo: item.logo,
      riserate: (
        ((item.volume24HrsETH * 1) / (item.tradeVolumeETH * 1)) *
        100
      ).toFixed(2),
    };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Select Token/Contract Address ⌄");

  useEffect(() => {
    setFilteredTokenList([...tokenList]);
  }, [tokenList, isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setFilteredTokenList(
      [...tokenList].filter((obj) => {
        // Check if any of the object's properties include the text
        return (
          obj.symbol.toLowerCase().includes(e.target.value.toLowerCase()) ||
          obj.id.toLowerCase().includes(e.target.value.toLowerCase())
        );
      })
    );
  };

  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      // Clicked outside the div
      handleSaveClick();
    }
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setFilteredTokenList([...tokenList]);
    setText("Select Token/Contract Address ⌄");
    // Perform any save operation with the edited text here
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="tokenlist-background font-header">
      <img
        src={TokenListLogo}
        alt="Token List Logo"
        className="token-list-logo"
      />
      <TopTokenList tokenList={limitedTokenList} />
      <div
        className="dropdown-container font-header"
        style={{ position: "relative" }}
      >
        {isEditing ? (
          <input
            type="text"
            placeholder={text}
            className="dropdown-button"
            onChange={handleInputChange}
            style={{ fontFamily: "altivo" }}
            autoFocus // Automatically focus on the input field when it appears
          />
        ) : (
          <button
            onClick={handleEditClick}
            className="dropdown-button"
            style={{ overflow: "hidden", fontFamily: "altivo" }}
          >
            {text}
          </button>
        )}
        {isEditing && (
          <div
            ref={divRef}
            style={{
              position: "absolute",
              top: "calc(45px)",
              transform: "translateX(-50%)",
              width: isLargeScreen ? "60vw" : "100vw",
              backgroundColor: "#191919",
              padding: "10px",
              borderRadius: "5px",
              zIndex: "50",
              color: "white",
              border: `2px solid transparent`,
              left: isLargeScreen ? "-13vw" : "-37vw",
            }}
          >
            {/* Add your div content here */}
            <TokenTable tokenData={filteredTokenList} />
          </div>
        )}
      </div>
    </div>
  );
};

export { TokenList };
