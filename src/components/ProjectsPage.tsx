import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import walletImg from "../assets/images/wallet.jfif";
import calculatorImg from "../assets/images/calculator.jpg";
import shoppingImg from "../assets/images/shopping.jpg";

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
      background: "lightyellow",
    },
    panel2: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      padding: "5%",
      fontSize: "4rem",
      background: `url(${walletImg})  center center`,
      backgroundSize: "cover",
      color: "lightsalmon",
    },
    panel3: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      padding: "5%",
      fontSize: "4rem",
      background: `url(${calculatorImg})  center center`,
      backgroundSize: "cover",
      color: "orange",
      textShadow: "3px 4px black",
    },
    panel4: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "5%",
      fontSize: "4rem",
      background: `url(${shoppingImg})  center center`,
      backgroundSize: "cover",
    },
  })
);

const ProjectsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.panel1}>Projects</div>
      <div className={classes.panel2}>Open Source</div>
      <div className={classes.panel3}>Quick Calculator</div>
      <div className={classes.panel4}>Sat's Right!</div>
    </div>
  );
};

export default ProjectsPage;
