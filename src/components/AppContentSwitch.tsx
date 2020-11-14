import * as React from "react";
import { useState, useEffect } from "react";

import { Link, BrowserRouter, NavLink, Switch, Route } from "react-router-dom";

import theme from "../styles/createMuiTheme";

import {
  ThemeProvider,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Breadcrumbs } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const AppContentSwitch = () => {
  return (
    <Switch>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Route exact path="/">
          Home Page
        </Route>
        <Route path="/work">Work</Route>
        <Route path="/projects">Projects</Route>
        <Route path="/background">Background</Route>
        <Route path="/interests">Interests</Route>
      </div>
    </Switch>
  );
};

export default AppContentSwitch;
