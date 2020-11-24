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

import ResumePdf from "../assets/resume.pdf";

const AppContentSwitch = () => {
  return (
    <Switch>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Route exact path="/">
          Home Page
        </Route>
        <Route path="/work">Work</Route>
        <Route path="/projects">Projects</Route>
        <Route path="/interests">Interests</Route>
        <Route path="/about">
          <Button target="_blank" href="https://github.com/pauldangpaul/">
            GitHub
          </Button>
          <Button
            target="_blank"
            href="https://www.linkedin.com/in/paul-dang-paul/"
          >
            LinkedIn
          </Button>
          <Button target="_blank" href={ResumePdf}>
            Resume (PDF)
          </Button>
        </Route>
      </div>
    </Switch>
  );
};

export default AppContentSwitch;
