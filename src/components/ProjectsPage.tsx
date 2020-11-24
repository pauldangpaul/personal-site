import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import walletImg from "../assets/images/wallet.jfif";
import calculatorImg from "../assets/images/calculator.jpg";

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
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      backgroundImage: `url(${walletImg})`,
      backgroundSize: "cover",
    },
    panel3: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      backgroundImage: `url(${calculatorImg})`,
      backgroundSize: "cover",
    },
  })
);

const ProjectsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.panel1}>Projects</div>
      <div className={classes.panel2}></div>
      <div className={classes.panel3}></div>
    </div>
  );
};

export default ProjectsPage;
