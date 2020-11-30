import * as React from "react";
import { useState, useEffect } from "react";

import theme from "../styles/createMuiTheme";

import oilImg from "../assets/images/oil-industry.webp";
import healthcareImg from "../assets/images/healthcare-industry.webp";
import fastFoodImg from "../assets/images/fast-food-industry.webp";

import microsoftLogo from "../assets/icons/microsoft-logo.webp";
import avanadeLogo from "../assets/icons/avanade-logo.webp";
import accentureLogo from "../assets/icons/accenture-logo.webp";

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
    orangeBannerTop: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: "75%",
      backgroundColor: "#FF9900",
    },
    content: {
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%",
      marginTop: "10vh",
      marginBottom: "10vh",
    },
    descriptionCard: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      color: "white",
      fontSize: "2rem",
      height: "60%",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column-reverse",
        alignItems: "center",
      },
    },
    descriptionText: {
      padding: "2rem 5rem",
      width: "70%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem",
        textAlign: "center",
        padding: "1rem",
        width: "100%",
      },
    },
    industryBackground: {
      background: "white",
      height: "13rem",
      width: "30%",
      display: "flex",
      alignItems: "center",
      margin: "2rem 0",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        margin: "0 0 0 20%",
        height: "50%",
      },
    },
    industryImgCarousel: {
      position: "relative",
      height: "90%",
      left: "-2rem",
    },
    companyLogosCard: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "85%",
      height: "45%",
      background: "white",
      padding: "2rem",
      boxShadow: "0px -20px 20px 0px #00000029",
      borderRadius: "20px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "30%",
      },
    },
    companyLogo: {
      width: "15rem",
      [theme.breakpoints.down("md")]: {
        width: "11rem",
      },
      [theme.breakpoints.down("sm")]: {
        width: "5rem",
      },
    },
  })
);

const AvanadePage = () => {
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
          <div className={classes.descriptionCard}>
            <div className={classes.descriptionText}>
              At Avanade, I gained 3 years of industry experience
              <br />
              <br />
              delivering cloud and digital solutions across different projects
              and industries
            </div>
            <div className={classes.industryBackground}>
              <img className={classes.industryImgCarousel} src={fastFoodImg} />
            </div>
          </div>
          <div className={classes.companyLogosCard}>
            <img className={classes.companyLogo} src={microsoftLogo} />
            <img className={classes.companyLogo} src={avanadeLogo} />
            <img className={classes.companyLogo} src={accentureLogo} />
          </div>

          {/* <img src={healthcareImg} />
          <img src={fastFoodImg} /> */}

          {/* <img src={oilImg} />
          <img src={healthcareImg} />
          <img src={fastFoodImg} /> */}
        </div>
      </div>
    </>
  );
};

export default AvanadePage;
