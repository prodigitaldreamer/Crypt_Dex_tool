import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { TVChartContainer } from "./common/TVChartContainer";
import Table from "./Table";
import "./style.css";

const MainComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); // Check if screen is larger than medium

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#191919",
        paddingRight: "7vw",
      }}
    >
      {/* Main content */}
      <Grid
        item
        xs={isMenuOpen ? 9 : 12}
        sx={{ transition: "width 0.5s", position: "relative" }}
      >
        <TVChartContainer height={isMenuOpen ? 70 : 70} />
        <Table height={isMenuOpen ? 70 : 90} />
        {/* Collapse button */}
        {isLargeScreen && (
          <button className="menubutton" onClick={toggleMenu}>
            <div style={{ marginTop: "-35%" }}>{isMenuOpen ? "›" : "‹"}</div>
          </button>
        )}
      </Grid>

      {/* Menu or additional content */}
      {isMenuOpen && <Grid item xs={3} className="font-header"></Grid>}
    </Grid>
  );
};

export default MainComponent;
