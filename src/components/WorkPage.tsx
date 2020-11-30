import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import officeImg from "../assets/images/avanade-office.webp";
import collegeImg from "../assets/images/marquette-u.webp";

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
    panel: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      background: `#EEEEEE`,
      backgroundSize: "cover",
      position: "relative",
    },
    heading: {
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
    orangeBannerTop: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: "50%",
      backgroundColor: "#FF9900",
    },
    orangeBannerBottom: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "8%",
      backgroundColor: "#FF9900",
      [theme.breakpoints.down("sm")]: {
        height: "15%",
      },
    },
    content: {
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        height: "80vh",
        marginTop: "5vh",
        marginBottom: "15vh",
      },
    },
    backgroundHeader: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#EEEEEE",
      marginBottom: "1rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "4rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "5rem",
      },
    },
    animatedUnderline: {
      height: "5px",
      background: "#EEEEEE",
      width: "75%",
    },
    backgroundCardSection: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      background: "#EEEEEE",
      boxShadow: "0px -25px 20px 0 rgba(150, 150, 150, 0.25)",
      justifyContent: "space-around",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
      },
      [theme.breakpoints.up("md")]: {
        width: "100%",
        padding: "4rem 2rem",
        borderRadius: "10px",
      },
      [theme.breakpoints.up("lg")]: {
        width: "80%",
        padding: "2rem 3rem",
      },
    },
    collegeCard: {
      display: "flex",
      fontSize: "1rem",
      alignItems: "center",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        flexDirection: "row",
      },
      [theme.breakpoints.up("md")]: {
        width: "18rem",
        flexDirection: "column",
      },
      [theme.breakpoints.up("lg")]: {
        width: "20rem",
        flexDirection: "column",
      },
    },
    officeCard: {
      display: "flex",
      fontSize: "1rem",
      alignItems: "center",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        flexDirection: "row-reverse",
      },
      [theme.breakpoints.up("md")]: {
        width: "18rem",
        flexDirection: "column",
      },
      [theme.breakpoints.up("lg")]: {
        width: "20rem",
        flexDirection: "column",
      },
    },
    cardImage: {
      width: "100%",
      borderRadius: "5px",
      marginBottom: "1rem",
      [theme.breakpoints.down("sm")]: {
        width: "45%",
        marginBottom: "0",
      },
    },
    cardInfo: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        margin: "0 0.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
      width: "100%",
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
      <div className={classes.panel}>
        <div className={classes.orangeBannerTop} />
        <div className={classes.content}>
          <div className={classes.backgroundHeader}>
            <b>BACKGROUND</b>
            <div className={classes.animatedUnderline} />
          </div>
          <div className={classes.backgroundCardSection}>
            <div className={classes.collegeCard}>
              <img
                className={classes.cardImage}
                src={collegeImg}
                alt="College of Marquette University"
              />
              <div className={classes.cardInfo}>
                <div>
                  <b>ACADEMIC EXCELLENCE</b>
                </div>
                <div>
                  <br />
                  In 2017, I graduated from Marquette University in WI
                  <br />
                  <br />
                  <i>
                    B.S. Biocomputing Eng.
                    <br />
                    Magna Cum Laude
                  </i>
                </div>
              </div>
            </div>
            <div className={classes.officeCard}>
              <img
                className={classes.cardImage}
                src={officeImg}
                alt="Avanade Office"
              />
              <div className={classes.cardInfo}>
                <div>
                  <b>BUSINESS & DIGITAL SOLUTIONS</b>
                </div>
                <div>
                  <br />
                  I landed a great opportunity with Avanade US, as a Consultant
                  in Software Engineering
                  <br />
                  <br />
                  <i>Chicago, IL</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.orangeBannerBottom} />
      </div>
    </>
  );
};

export default WorkPage;
