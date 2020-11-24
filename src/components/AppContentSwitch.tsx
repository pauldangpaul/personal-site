import * as React from "react";
import { useState, useEffect } from "react";

import {
  Link,
  BrowserRouter,
  NavLink,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import theme from "../styles/createMuiTheme";

import {
  ThemeProvider,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Breadcrumbs, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import SmallTalkPage from "./SmallTalkPage";
import WorkPage from "./WorkPage";

const AppContentSwitch = () => {
  return (
    <Switch>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/work">
          <WorkPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/small-talk">
          <SmallTalkPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </div>
    </Switch>
  );
};

export default AppContentSwitch;
