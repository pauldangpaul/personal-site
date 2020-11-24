import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import orangeImg from "../assets/images/orange.jpg";
import chicagoImg from "../assets/images/chicago.jpg";

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
      backgroundImage: `url(${orangeImg})`,
      backgroundSize: "cover",
    },
    panel3: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      backgroundImage: `url(${chicagoImg})`,
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