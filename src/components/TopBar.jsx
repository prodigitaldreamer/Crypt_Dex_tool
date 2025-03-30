import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Skeleton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../assets/img/logo.png";
import TopbarLogo from "../assets/img/Topbar-Logo.png";
import "./style.css";

const TopBar = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: "black",
        marginBottom: "15px",
        paddingX: "7vw",
        paddingY: "30px",
      }}
    >
      <Toolbar>
        {isMediumScreen ? (
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
            wrap="nowrap"
          >
            {/* First part (25%) */}
            <Grid item>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "90%", maxWidth: "300px" }}
              />
            </Grid>

            {/* Second part (50%) */}
            <Grid item>
              <img
                src={TopbarLogo}
                alt="Topbar-Logo"
                style={{ width: "100%", maxWidth: "728px" }}
              />
            </Grid>

            {/* Third part (25%) */}
            <Grid item>
              {/* Animation button */}
              <Button
                variant="contained"
                className="gradient-button" // Apply the gradient-button class
                href="https://swap.thetatoken.org/swap" // Specify the URL of the external site
                target="_blank" // Open the link in a new tab/window
                rel="noopener noreferrer" // Add security attributes when opening in a new tab/window
                sx={{ fontSize: "1vw", fontWeight: "bold" }}
                style={{ padding: "0.5vw 1.8vw" }}
              >
                Trade on Thetaswap
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            alignItems="center"
            spacing={3}
            justifyContent="space-between"
          >
            {/* First part (25%) */}
            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "90%", maxWidth: "300px" }}
              />
            </Grid>

            {/* Third part (25%) */}
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              {/* Animation button */}
              <Button
                variant="contained"
                className="gradient-button" // Apply the gradient-button class
                href="https://swap.thetatoken.org/swap" // Specify the URL of the external site
                target="_blank" // Open the link in a new tab/window
                rel="noopener noreferrer" // Add security attributes when opening in a new tab/window
                sx={{ fontSize: "2vw", fontWeight: "bold" }}
                style={{ padding: "1.4vw 3.5vw", textAlign: "center" }}
              >
                Trade on Thetaswap
              </Button>
            </Grid>

            {/* Second part (50%) */}
            <Grid item xs={12}>
              <img
                src={TopbarLogo}
                alt="Topbar-Logo"
                style={{ width: "100%", maxWidth: "728px" }}
              />
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
