import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import headshotImg from "../assets/images/ninos-headshot.webp";

import {
  ThemeProvider,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panel1: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1rem",
      background: "#ff9900",
      padding: "10%",
      position: "relative",
    },
    hidden: {
      opacity: 0,
    },
    whiteBannerBottom: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "25%",
      backgroundColor: "#eee",
    },
    quoteCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      color: "#eee",
    },
    quoteText: {
      fontSize: "2rem",
      fontStyle: "italic",
      padding: "1rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    quoteAuthor: {
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
    quoteAuthorImg: {
      height: "10rem",
      margin: "1.5rem",
      border: "5px solid white",
      borderRadius: "50%",
      zIndex: 1,
    },
  })
);

const TestimoniesPage = () => {
  const classes = useStyles();

  const linksRef = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      <div className={classes.panel1} ref={linksRef.ref}>
        <div className={classes.whiteBannerBottom} />
        <div className={classes.quoteCard}>
          <div className={classes.quoteText}>
            {`“Paul is a self-motivated team member. He demonstrated superior technical ability and produced work of exceptional quality. He took the time to fully understand the scope of tasks and displayed keen attention to details with effective time management, and helped teammates in times of need.”`}
          </div>
          <div className={classes.quoteAuthor}>
            <b>Ninos Youkhana</b>
            <br />
            IT Consultant at Accenture
            <br />
            Project Scrum Master
          </div>
          <img className={classes.quoteAuthorImg} src={headshotImg} />
        </div>
      </div>
    </>
  );
};

export default TestimoniesPage;
