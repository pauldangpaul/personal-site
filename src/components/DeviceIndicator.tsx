import * as React from "react";
import { useState, useEffect } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

import * as PhoneIcon from "../assets/devices/Phone.svg";
import * as TabletPIcon from "../assets/devices/TabletP.svg";
import * as TabletLIcon from "../assets/devices/TabletL.svg";
import * as LaptopIcon from "../assets/devices/Laptop.svg";
import * as DesktopIcon from "../assets/devices/Desktop.svg";

import { Card, Paper, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    deviceIndicator: {
      marginBottom: "0.5em",
    },
    deviceContainer: {
      padding: "0.3em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    deviceCard: {
      height: "5em",
      padding: "0.5em",
      display: "flex",
      justifyContent: "center",
      background: "#EEE",
      borderRadius: "25%",
      filter: "brightness(0.75)",
      opacity: 0.75,
    },
    deviceCardCurrent: {
      height: "5em",
      padding: "0.5rem",
      display: "flex",
      justifyContent: "center",
      background: "#D9D9D9",
      borderRadius: "15%",
    },
    deviceCardMedia: {
      width: "auto",
      height: "100%",
    },
  })
);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export enum mediaQuerySize {
  phone = 1,
  portaitTablet = 2,
  landscapeTablet = 3,
  laptop = 4,
  desktop = 5,
}

export function getMediaQueryType(): mediaQuerySize {
  const phone = useMediaQuery("(max-width:420px)");
  const portaitTablet = useMediaQuery(
    "(min-width:420px) and (max-width:768px)"
  );
  const landscapeTablet = useMediaQuery(
    "(min-width:768px) and (max-width:1224px)"
  );
  const laptop = useMediaQuery("(min-width:1224px) and (max-width:1824px)");
  const desktop = useMediaQuery("(min-width:1824px)");

  if (phone) return mediaQuerySize.phone;
  if (portaitTablet) return mediaQuerySize.portaitTablet;
  if (landscapeTablet) return mediaQuerySize.landscapeTablet;
  if (laptop) return mediaQuerySize.laptop;
  if (desktop) return mediaQuerySize.desktop;
  return 0;
}

const DeviceIndicator = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  const mediaQueryType = getMediaQueryType();

  const devices = [
    {
      icon: PhoneIcon,
      isCurrentDevice: mediaQueryType === mediaQuerySize.phone,
    },
    {
      icon: TabletPIcon,
      isCurrentDevice: mediaQueryType === mediaQuerySize.portaitTablet,
    },
    {
      icon: TabletLIcon,
      isCurrentDevice: mediaQueryType === mediaQuerySize.landscapeTablet,
    },
    {
      icon: LaptopIcon,
      isCurrentDevice: mediaQueryType === mediaQuerySize.laptop,
    },
    {
      icon: DesktopIcon,
      isCurrentDevice: mediaQueryType === mediaQuerySize.desktop,
    },
  ];

  const deviceCards = devices.map((device) =>
    device.isCurrentDevice ? (
      <Card className={classes.deviceCardCurrent}>
        <CardMedia
          className={classes.deviceCardMedia}
          component="img"
          image={device.icon}
        />
      </Card>
    ) : (
      // // Display other device icons
      // <Card className={classes.deviceCard}>
      //   <CardMedia
      //     className={classes.deviceCardMedia}
      //     component="img"
      //     image={device.icon}
      //   />
      // </Card>
      <></>
    )
  );

  return (
    <div className={classes.deviceIndicator}>
      <div className={classes.deviceContainer}>{deviceCards}</div>
      {/* {`Media Query Type ${mediaQueryType}, Height ${height}, Width ${width}`} */}
    </div>
  );
};

export default DeviceIndicator;
