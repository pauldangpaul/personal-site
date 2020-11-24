import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import laptopImg from "../assets/images/laptop.png";
import helpingImg from "../assets/images/helping-hands.jpg";
import headshotImg from "../assets/images/prof-headshot.jfif";

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
      flexWrap: "wrap",
      background: "lightBlue",
    },
    panel2: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      background: `url(${helpingImg}) center center`,
      backgroundSize: "cover",
    },
    panel3: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      background: `url(${laptopImg}) center center`,
      backgroundSize: "cover",
    },
    headshotImage: {
      height: "12rem",
      borderRadius: "10%",
      marginLeft: "2rem",
    },
    greetingTitle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap-reverse",
    },
  })
);

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.panel1}>
        <div className={classes.greetingTitle}>
          <div>Hello!</div>
          <div>
            <img
              className={classes.headshotImage}
              src={headshotImg}
              alt="Photo of myself"
            />
          </div>
        </div>
      </div>
      <div className={classes.panel2}></div>
      <div className={classes.panel3}></div>
    </div>
  );
};

export default HomePage;
