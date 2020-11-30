import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import reactLogo from "../assets/icons/react-icon.svg";
import responsiveLogo from "../assets/icons/responsive-design-icon.svg";
import figmaLogo from "../assets/icons/figma-icon.svg";

import netCoreLogo from "../assets/icons/net-core-logo.svg";
import postgresqlLogo from "../assets/icons/postgresql-logo.svg";
import azureLogo from "../assets/icons/azure-logo.svg";

import scrumLogo from "../assets/icons/scrum-logo.png";
import gitLogo from "../assets/icons/git-logo.svg";
import devOpsLogo from "../assets/icons/azure-devops-logo.png";

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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `white`,
      backgroundSize: "cover",
      position: "relative",
      padding: "2rem 0",
    },
    orangeBannerBottom: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "50%",
      backgroundColor: "#FF9900",
    },
    content: {
      zIndex: 1,
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    skillsSection: {
      width: "85%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "white",
      boxShadow: "0px 20px 20px 2px rgba(0, 0, 0, 0.25)",
      borderRadius: "25px",
      padding: "1rem 0 2rem 0",
      marginBottom: "5rem",
    },
    skillsSectionHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "3rem",
      paddingBottom: "1rem",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
        padding: "2rem 0 1rem 0",
      },
    },
    animatedUnderline: {
      height: "2px",
      background: "#111111",
      width: "75%",
    },
    skillsCardList: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "100%",
    },
    skillCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "20rem",
      marginTop: "3rem",
    },
    skillCardHeader: {
      fontSize: "2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem",
      },
    },
    skillList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    skillItem: {
      display: "flex",
      height: "3rem",
      alignItems: "center",
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        height: "2rem",
        fontSize: "1rem",
      },
    },
    skillImg: {
      width: "3rem",
      paddingRight: "1rem",
      [theme.breakpoints.down("sm")]: {
        width: "2.5rem",
      },
    },
  })
);

const SkillsPage = () => {
  const classes = useStyles();

  const workExpRef = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      <div className={classes.panel}>
        <div className={classes.content}>
          <div className={classes.skillsSection}>
            <div className={classes.skillsSectionHeader}>
              TECHNOLOGY & SKILLS
              <div className={classes.animatedUnderline} />
            </div>
            <div className={classes.skillsCardList}>
              <div className={classes.skillCard}>
                <div className={classes.skillCardHeader}>FRONT-END</div>
                <div className={classes.skillList}>
                  <div className={classes.skillItem}>
                    <img src={reactLogo} className={classes.skillImg} />
                    React.js & TypeScript
                  </div>
                  <div className={classes.skillItem}>
                    <img src={responsiveLogo} className={classes.skillImg} />
                    Responsive Styling
                  </div>
                  <div className={classes.skillItem}>
                    <img src={figmaLogo} className={classes.skillImg} />
                    Figma Sketch / Design
                  </div>
                </div>
              </div>
              <div className={classes.skillCard}>
                <div className={classes.skillCardHeader}>BACK-END</div>
                <div className={classes.skillList}>
                  <div className={classes.skillItem}>
                    <img src={netCoreLogo} className={classes.skillImg} />
                    .NET Core MVC
                  </div>
                  <div className={classes.skillItem}>
                    <img src={postgresqlLogo} className={classes.skillImg} />
                    PostgreSQL
                  </div>
                  <div className={classes.skillItem}>
                    <img src={azureLogo} className={classes.skillImg} />
                    Azure Cloud
                  </div>
                </div>
              </div>
              <div className={classes.skillCard}>
                <div className={classes.skillCardHeader}>DEVELOPMENT</div>
                <div className={classes.skillList}>
                  <div className={classes.skillItem}>
                    <img src={scrumLogo} className={classes.skillImg} />
                    Scrum Methodologies
                  </div>
                  <div className={classes.skillItem}>
                    <img src={gitLogo} className={classes.skillImg} />
                    Git Branching & PRs
                  </div>
                  <div className={classes.skillItem}>
                    <img src={devOpsLogo} className={classes.skillImg} />
                    Azure DevOps CI/CD
                  </div>
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

export default SkillsPage;
