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
import {
  Breadcrumbs,
  CssBaseline,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import AppContentSwitch from "./AppContentSwitch";
import { getMediaQueryType, mediaQuerySize } from "./DeviceIndicator";
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
    menuButton: {
      position: "absolute",
      right: "1em",
      top: "1em",
    },
    listItem: {
      width: "18em",
      height: "5em",
    },
    menuDrawer: {
      background: "#fafafa",
    },
  })
);

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const App = () => {
  const classes = useStyles();

  const deviceSize = getMediaQueryType();

  const [openMenu, setMenuOpen] = useState(false);

  const menuItem = [
    { link: "/", label: "HOME" },
    { link: "/work", label: "WORK" },
    { link: "/projects", label: "PROJECTS" },
    { link: "/background", label: "BACKGROUND" },
    { link: "/interests", label: "INTERESTS" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          {deviceSize > mediaQuerySize.portaitTablet && (
            <Breadcrumbs className={classes.navBar}>
              {menuItem.map((item) => (
                <Link to={item.link} className={classes.link}>
                  <Typography>{item.label}</Typography>
                </Link>
              ))}
            </Breadcrumbs>
          )}
          <div className={classes.menuButton}>
            {openMenu ? (
              <CloseIcon onClick={() => setMenuOpen(false)} />
            ) : (
              <MenuIcon onClick={() => setMenuOpen(true)} />
            )}
          </div>
          <SwipeableDrawer
            anchor="right"
            open={openMenu}
            onClose={() => setMenuOpen(false)}
            onOpen={() => {}}
            classes={{ paper: classes.menuDrawer }}
          >
            <List>
              {menuItem.map((item) => (
                <>
                  <Link
                    to={item.link}
                    className={classes.link}
                    onClick={() => setMenuOpen(false)}
                  >
                    <ListItem className={classes.listItem}>
                      <ListItemText>{item.label}</ListItemText>
                    </ListItem>
                  </Link>
                  <Divider />
                </>
              ))}
            </List>
          </SwipeableDrawer>
          <br />
          <AppContentSwitch />
        </BrowserRouter>

        <DeviceIndicator />

        <br />
        <i>Website under construction - check back soon!</i>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
