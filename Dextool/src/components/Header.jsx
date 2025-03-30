import { useTheme, createTheme, Button, useMediaQuery } from "@mui/material";
import { useRef } from "react";
import Logo from "../assets/img/logo.png";
import HeaderLogo from "../assets/img/Topbar-Logo.png";
import "./style.css";
import "../App.css";

const Header = () => {
  const theme = createTheme({
    // Define the theme within the component
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1360, // Change the value of lg breakpoint here
        xl: 1920,
      },
    },
  });

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // Use the theme with useMediaQuery

  return isLargeScreen ? (
    <div className="header-background">
      <div className="header-justify">
        <img src={Logo} alt="Logo image" className="logo-image" />
        <img
          src={HeaderLogo}
          alt="Header Logo image"
          className="header-logo-image"
        />
        <Button
          variant="contained"
          className="gradient-button font-header flow-container" // Apply the gradient-button class
          href="https://swap.thetatoken.org/swap" // Specify the URL of the external site
          target="_blank" // Open the link in a new tab/window
          rel="noopener noreferrer" // Add security attributes when opening in a new tab/window
          sx={{
            paddingY: "10px",
            wordWrap: "break-word",
          }}
        >
          <div className="not-flow-content font-header">Trade on Thetaswap</div>
        </Button>
      </div>
    </div>
  ) : (
    <>
      <div className="header-background">
        <div className="header-justify" style={{ marginBottom: "20px" }}>
          <img
            src={Logo}
            alt="Logo image"
            className="logo-image"
            style={{ width: "50%" }}
          />
          <Button
            variant="contained"
            className="gradient-button font-header flow-container" // Apply the gradient-button class
            href="https://swap.thetatoken.org/swap" // Specify the URL of the external site
            target="_blank" // Open the link in a new tab/window
            rel="noopener noreferrer" // Add security attributes when opening in a new tab/window
            sx={{
              paddingY: "10px",
              wordWrap: "break-word",
              width: "50%",
            }}
          >
            <div className="not-flow-content font-header">
              Trade on Thetaswap
            </div>
          </Button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={HeaderLogo}
            alt="Header Logo image"
            className="header-logo-image"
          />
        </div>
      </div>
    </>
  );
};

export { Header };
