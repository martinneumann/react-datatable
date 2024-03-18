import React, { FC } from "react";
import { HeaderWrapper } from "./header.styled";
import { AppBar, Box, Toolbar, Typography, colors } from "@mui/material";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const toolBarStyle = {
    gap: "12px",
  };
  const linkStyle = {
    color: "white",
  };
  return (
    <HeaderWrapper data-testid="Header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="app-bar" position="static">
          <Toolbar style={toolBarStyle}>
            <Link style={linkStyle} to={`/data`}>
              Data
            </Link>
            <Link style={linkStyle} to={`/datasets`}>
              Datasets
            </Link>
            <Link style={linkStyle} to={`/pipelines`}>
              Pipelines
            </Link>
            <Link style={linkStyle} to={`/trainings`}>
              Trainings
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;
