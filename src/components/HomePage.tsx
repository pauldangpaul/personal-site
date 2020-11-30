import * as React from "react";
import { useState, useEffect } from "react";
import theme from "../styles/createMuiTheme";
import headshotImg from "../assets/images/prof-headshot.webp";
import whiteImg from "../assets/images/bg/white.webp";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import "../styles/animations.css";
import "../styles/react-transitions-animations.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import {
  ThemeProvider,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panel: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      flexWrap: "wrap",
      background: `url(${whiteImg})  center center`,
      padding: "2rem",
      position: "relative",
    },
    introCard: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    introCardText: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.up("md")]: {
        width: "50%",
      },
    },
    headshotImage: {
      [theme.breakpoints.down("xs")]: {
        height: "12rem",
      },
      [theme.breakpoints.up("sm")]: {
        height: "16rem",
      },
      [theme.breakpoints.up("md")]: {
        height: "16rem",
      },
      [theme.breakpoints.up("lg")]: {
        height: "18rem",
      },
      borderRadius: "10%",
      margin: "2rem",
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
    downArrow: {
      position: "absolute",
      bottom: "5%",
    },
    hidden: {
      opacity: 0,
    },
    orangeBannerTop: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: "8%",
      backgroundColor: "#FF9900",
    },
    orangeBannerBottom: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "8%",
      backgroundColor: "#FF9900",
    },
  })
);

const HomePage = () => {
  const classes = useStyles();

  const homeRef = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      <div className={classes.panel}>
        <div
          className={homeRef.inView ? classes.introCard : classes.hidden}
          ref={homeRef.ref}
        >
          <CSSTransition
            in={homeRef.inView}
            timeout={5000}
            classNames="fadeInRight"
          >
            <img
              className={classes.headshotImage}
              src={headshotImg}
              alt="Photo of myself"
            />
          </CSSTransition>
          <CSSTransition
            in={homeRef.inView}
            timeout={5000}
            classNames="fadeInUp"
          >
            <div className={classes.introCardText}>
              <div className={classes.heading}>Paul Dang</div>
              <div className={classes.subHeading}>
                <br />
                FULL-STACK DEVELOPER
              </div>
              <div className={classes.paragraph}>
                <br />
                Driven by the intersection of finance, user experience and
                technology, and determined to help build its future.
                <br />
                <br />
                More about me below - and let's connect!
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className={classes.downArrow}>
          <KeyboardArrowDownIcon />
        </div>
        <div className={classes.orangeBannerTop} />
      </div>
    </>
  );
};
// TODO: https://www.npmjs.com/package/react-animate-on-scroll
export default HomePage;
