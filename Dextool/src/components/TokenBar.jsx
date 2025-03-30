import React, { useState, useEffect } from "react";
import { Grid, Button, useMediaQuery, useTheme } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import TopToken from "./common/TopToken";
import { useDispatch, useSelector } from "react-redux";
import { fetchTokenListRequest } from "../redux/actions/tokenAction";
import TokenTable from "./TokenTable";
import TokenbarLogo from "../assets/img/Tokenbar-Logo.png";

const TokenBar = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); // Check if screen is larger than medium

  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the action to fetch token data
    dispatch(fetchTokenListRequest());
  }, [fetchTokenListRequest]);

  const tokenList = useSelector((state) => state.tokenReducer.tokenList);
  const loading = useSelector((state) => state.tokenReducer.loading);
  const error = useSelector((state) => state.tokenReducer.error);

  const [isDivVisible, setIsDivVisible] = useState(false);

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  const sortedTokenList = tokenList.sort(
    (a, b) =>
      (b.volume24HrsETH * 1) / (b.tradeVolumeETH * 1) -
      (a.volume24HrsETH * 1) / (a.tradeVolumeETH * 1)
  );

  // Slice the sorted token list to display only the first 7 items
  const limitedTokenList = sortedTokenList.slice(0, 7).map((item, index) => {
    return {
      num: "#" + (index + 1),
      symbol: item.symbol,
      riserate: (
        ((item.volume24HrsETH * 1) / (item.tradeVolumeETH * 1)) *
        100
      ).toFixed(2),
    };
  });

  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      sx={{
        backgroundColor: "#191919",
        paddingLeft: "7vw",
        paddingRight: "7vw",
      }}
    >
      {/* First part (12%) */}
      <Grid
        item
        xs={12}
        sm={isMediumScreen ? 12 : 2}
        display="flex"
        justifyContent="center"
      >
        <img
          src={TokenbarLogo}
          width="100%"
          height={50}
          className="gradient-skeleton"
        />
      </Grid>

      {/* Second part (70%) */}
      <Grid
        item
        xs={12}
        sm={isMediumScreen ? 12 : 8}
        sx={{ overflowX: "auto", cursor: "pointer" }}
      >
        <Grid container spacing={2} alignItems="center" wrap="nowrap">
          {/* Seven elements */}
          {limitedTokenList.map((item, index) => (
            <TopToken key={index} itemData={item} />
          ))}
        </Grid>
      </Grid>

      {/* Third part (18%) */}
      <Grid
        item
        xs={12}
        sm={isMediumScreen ? 12 : 2}
        display="flex"
        justifyContent="center"
        sx={{ position: "relative" }}
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{
            textTransform: "none",
            color: "white",
            borderColor: "white",
            padding: "0.5vw",
            display: "flex",
            textWrap: "nowrap",
            overflow: "hidden",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
              borderColor: "white",
            },
          }} // Apply white color and border
          onClick={toggleDivVisibility} // Toggle div visibility on button click
        >
          Select Token/Contract Address
          <ArrowDownward />
        </Button>
        {/* Div to show/hide */}
        {isDivVisible && (
          <div
            style={{
              position: "absolute",
              top: "calc(26% + 50px)",
              transform: "translateX(-50%)",
              width: isLargeScreen ? "60vw" : "90vw",
              backgroundColor: "#191919",
              padding: "10px",
              borderRadius: "5px",
              zIndex: "50",
              color: "white",
              border: `2px solid transparent`, // Set border color to primary color
              right: "-30vw",
            }}
          >
            {/* Add your div content here */}
            <TokenTable tokenData={tokenList} />
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default TokenBar;
