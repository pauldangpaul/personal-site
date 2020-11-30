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
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `white`,
      backgroundSize: "cover",
      position: "relative",
    },
    orangeBannerBottom: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "40%",
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
      padding: "2rem 2rem",
      background: "white",
      boxShadow: "0px 20px 20px 2px rgba(0, 0, 0, 0.25)",
      borderRadius: "25px",
    },
    skillsSectionHeader: {
      fontSize: "3rem",
      paddingBottom: "2rem",
    },
    skillsCardList: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
    },
    skillCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      width: "15rem",
    },
    skillCardHeader: {
      fontSize: "1.75rem",
      marginBottom: "1rem",
    },
    skillList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    skillItem: {
      display: "flex",
      width: "100%",
      height: "2.1rem",
      alignItems: "center",
    },
    skillImg: {
      width: "2rem",
      paddingRight: "0.5rem",
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
