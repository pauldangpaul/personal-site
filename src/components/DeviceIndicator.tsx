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
    deviceContainer: {
      margin: "2% 10%",
      padding: "2rem",
      display: "flex",
      justifyContent: "space-around",
    },
    deviceCard: {
      width: "8rem",
      height: "8rem",
      padding: "1.5rem",
      display: "flex",
      justifyContent: "center",
      filter: "brightness(0.75)",
      opacity: 0.75,
    },
    deviceCardCurrent: {
      width: "8rem",
      height: "8rem",
      padding: "1.5rem",
      display: "flex",
      justifyContent: "center",
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

function getMediaQueryType() {
  const phones = useMediaQuery("(max-width:420px)");
  const portaitTablets = useMediaQuery(
    "(min-width:420px) and (max-width:768px)"
  );
  const landscapeTablets = useMediaQuery(
    "(min-width:768px) and (max-width:1224px)"
  );
  const laptops = useMediaQuery("(min-width:1224px) and (max-width:1824px)");
  const desktops = useMediaQuery("(min-width:1824px)");

  if (phones) return 1;
  if (portaitTablets) return 2;
  if (landscapeTablets) return 3;
  if (laptops) return 4;
  if (desktops) return 5;
}

const DeviceIndicator = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  const mediaQueryType = getMediaQueryType();

  const devices = [
    { icon: PhoneIcon, isCurrentDevice: mediaQueryType === 1 },
    { icon: TabletPIcon, isCurrentDevice: mediaQueryType === 2 },
    { icon: TabletLIcon, isCurrentDevice: mediaQueryType === 3 },
    { icon: LaptopIcon, isCurrentDevice: mediaQueryType === 4 },
    { icon: DesktopIcon, isCurrentDevice: mediaQueryType === 5 },
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
      <Card className={classes.deviceCard}>
        <CardMedia
          className={classes.deviceCardMedia}
          component="img"
          image={device.icon}
        />
      </Card>
    )
  );

  return (
    <div className="DeviceIndicator">
      <div className={classes.deviceContainer}>{deviceCards}</div>
      {`Media Query Type ${mediaQueryType}, Height ${height}, Width ${width}`}
    </div>
  );
};

export default DeviceIndicator;
