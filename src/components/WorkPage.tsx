import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import orangeImg from "../assets/images/orange.webp";
import chicagoImg from "../assets/images/chicago.webp";

import {
  getMediaQueryType,
  mediaQuerySize,
} from "../components/DeviceIndicator";

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
      padding: "2rem",
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
      padding: "2rem",
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
      padding: "2rem",
    },
    panelHeading: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "7rem",
      },
    },
  })
);

const WorkPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.panel1}>
        <div className={classes.panelHeading}>Work Experience</div>
      </div>
      <div className={classes.panel2}></div>
      <div className={classes.panel3}></div>
    </div>
  );
};

export default WorkPage;
