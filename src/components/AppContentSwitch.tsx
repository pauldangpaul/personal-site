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
      <Route exact path="/">
        Home Page
      </Route>
      <Route path="/work">About</Route>
      <Route path="/projects">Project</Route>
      <Route path="/background">Background</Route>
      <Route path="/interests">Interests</Route>
    </Switch>
  );
};

export default AppContentSwitch;
