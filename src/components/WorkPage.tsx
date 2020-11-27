import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import orangeImg from "../assets/images/orange.webp";
import chicagoImg from "../assets/images/chicago.webp";

import {
  getMediaQueryType,
  mediaQuerySize,
} from "../components/DeviceIndicator";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useInView } from "react-intersection-observer";

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
      fontSize: "4rem",
      padding: "2rem",
      background: "lightgreen",
      position: "relative",
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
      position: "relative",
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
      position: "relative",
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
    downArrow: {
      position: "absolute",
      bottom: "7%",
    },
  })
);

const WorkPage = () => {
  const classes = useStyles();

  const workExpRef = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      <div className={classes.panel1}>
        <div className={classes.panelHeading}>Work Experience</div>
        <div className={classes.downArrow}>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className={classes.panel2}>
        {" "}
        <div className={classes.downArrow}>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className={classes.panel3}>
        {" "}
        <div className={classes.downArrow}>
          <KeyboardArrowDownIcon style={{ color: "white" }} />
        </div>
      </div>
    </>
  );
};

export default WorkPage;
