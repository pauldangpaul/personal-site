import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import headshotImg from "../assets/images/headshot.webp";
import ResumePdf from "../assets/resume.pdf";

import githubLogo from "../assets/icons/github.svg";
import linkedinLogo from "../assets/icons/linkedin.svg";
import resumeLogo from "../assets/icons/resume.svg";

import {
  ThemeProvider,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panel1: {
      scrollSnapAlign: "start",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      background: "#EEE",
      padding: "10%",
    },
    profileCard: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "center",
    },
    iconLogo: {
      [theme.breakpoints.down("sm")]: {
        height: "1rem",
        paddingRight: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        height: "2rem",
        paddingRight: "1rem",
      },
      [theme.breakpoints.up("lg")]: {
        height: "3rem",
        paddingRight: "1rem",
      },
    },
    iconLinksContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "center",
    },
    headshotImage: {
      borderRadius: "10%",
      marginRight: "2rem",
      [theme.breakpoints.down("sm")]: {
        height: "8rem",
      },
      [theme.breakpoints.up("md")]: {
        height: "14rem",
      },
      [theme.breakpoints.up("lg")]: {
        height: "20rem",
      },
    },
  })
);

const LinksPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.panel1}>
        <div className={classes.profileCard}>
          <div>
            <img
              className={classes.headshotImage}
              src={headshotImg}
              alt="Photo of myself"
            />
          </div>
          <div className={classes.iconLinksContainer}>
            <Button target="_blank" href="https://github.com/pauldangpaul/">
              <img
                className={classes.iconLogo}
                src={githubLogo}
                alt="GitHub Logo"
              />
              GitHub
            </Button>
            <Button
              target="_blank"
              href="https://www.linkedin.com/in/paul-dang-paul/"
            >
              <img
                className={classes.iconLogo}
                src={linkedinLogo}
                alt="Linkedin Logo"
              />
              LinkedIn
            </Button>
            <Button target="_blank" href={ResumePdf}>
              <img
                className={classes.iconLogo}
                src={resumeLogo}
                alt="Resume Download Icon"
              />
              Resume (PDF)
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksPage;
