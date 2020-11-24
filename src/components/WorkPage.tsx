import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import orangeImg from "../assets/images/orange.webp";
import chicagoImg from "../assets/images/chicago.webp";

import {
  ThemeProvider,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      scrollSnapType: "y mandatory",
      overflowY: "scroll",
      height: "100vh",
      width: "100%",
    },
    panel1: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      background: "lightgreen",
    },
    panel2: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      background: `url(${orangeImg}) center center`,
      backgroundSize: "cover",
    },
    panel3: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      background: `url(${chicagoImg}) center center`,
      backgroundSize: "cover",
    },
  })
);

const WorkPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.panel1}>My Work Experience</div>
      <div className={classes.panel2}></div>
      <div className={classes.panel3}></div>
    </div>
  );
};

export default WorkPage;
