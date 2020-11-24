import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import blocksImg from "../assets/images/blocks.jpg";
import energyImg from "../assets/images/energy.jpg";

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
      background: "lightSalmon",
    },
    panel2: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "5%",
      fontSize: "4rem",
      background: `url(${energyImg}) center center`,
      backgroundSize: "cover",
    },
    panel3: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "5%",
      fontSize: "4rem",
      background: `url(${blocksImg})  center center`,
      backgroundSize: "cover",
    },
  })
);

const SmallTalkPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.panel1}>Small Talk</div>
      <div className={classes.panel2}>Background</div>
      <div className={classes.panel3}>Interests</div>
    </div>
  );
};

export default SmallTalkPage;