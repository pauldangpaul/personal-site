import * as React from "react";
import { useState, useEffect } from "react";

import { Link, BrowserRouter, NavLink, Switch, Route } from "react-router-dom";

import theme from "../styles/createMuiTheme";

import "../styles/App.css";

import {
  ThemeProvider,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Breadcrumbs, CssBaseline, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HomeIcon from "@material-ui/icons/Home";

import AppContentSwitch from "./AppContentSwitch";
import DeviceIndicator from "./DeviceIndicator";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navBar: {
      top: 0,
      display: "flex",
      justifyContent: "center",
    },
    link: {
      display: "flex",
      textDecoration: "none",
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  })
);

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const App = () => {
  const classes = useStyles();
  const phones = useMediaQuery("(max-width:420px)");
  const portaitTablets = useMediaQuery("(min-width:420px)");
  const landscapeTablets = useMediaQuery("(min-width:768px)");
  const laptops = useMediaQuery("(min-width:1224px)");
  const desktops = useMediaQuery("(min-width:1824px)");
  const giantMonitors = useMediaQuery("(min-width:3000px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Breadcrumbs className={classes.navBar}>
            <Link to="/" className={classes.link}>
              <Typography>HOME</Typography>
            </Link>
            <Link to="/work" className={classes.link}>
              <Typography>WORK</Typography>
            </Link>
            <Link to="/projects" className={classes.link}>
              <Typography>PROJECTS</Typography>
            </Link>
            <Link to="/background" className={classes.link}>
              <Typography>BACKGROUND</Typography>
            </Link>
            <Link to="/interests" className={classes.link}>
              <Typography>INTERESTS</Typography>
            </Link>
          </Breadcrumbs>
          <AppContentSwitch />
        </BrowserRouter>
        <DeviceIndicator />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
