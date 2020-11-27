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
import LinksPage from "./LinksPage";
import ProjectsPage from "./ProjectsPage";
import SmallTalkPage from "./SmallTalkPage";
import WorkPage from "./WorkPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      scrollSnapType: "y mandatory",
      overflowY: "scroll",
      height: "100vh",
      width: "100%",
    },
  })
);

const AppContentSwitch = () => {
  const classes = useStyles();

  return (
    <Switch>
      <div
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   flexDirection: "column",
        // }}
        className={classes.container}
      >
        <Route exact path="/">
          <HomePage />
          <WorkPage />
          <ProjectsPage />
          <LinksPage />
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
        <Route path="/links">
          <LinksPage />
        </Route>
      </div>
    </Switch>
  );
};

export default AppContentSwitch;
