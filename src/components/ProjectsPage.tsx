import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import walletImg from "../assets/images/bg/wallet.webp";
import calculatorImg from "../assets/images/bg/calculator.webp";
import shoppingImg from "../assets/images/bg/shopping.webp";

import {
  ThemeProvider,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panel1: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "lightyellow",
    },
    panel2: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      padding: "12%",
      background: `url(${walletImg})  center center`,
      backgroundSize: "cover",
      color: "lightsalmon",
    },
    panel3: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "12%",
      background: `url(${shoppingImg})  center center`,
      backgroundSize: "cover",
      color: "rgba(0,0,0,0.75)",
    },
    heading: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "4rem",
      },
    },
    subHeading: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.5rem",
      },
    },
    paragraph: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1rem",
      },
      fontStyle: "italic",
    },
  })
);

const ProjectsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.panel1}>
        <div className={classes.heading}>Projects</div>
      </div>
      <div className={classes.panel2}>
        <div className={classes.heading}>S.S. Converter</div>
      </div>
      <div className={classes.panel3}>
        <div className={classes.heading}>Sat's Right!</div>
      </div>
    </>
  );
};

export default ProjectsPage;
