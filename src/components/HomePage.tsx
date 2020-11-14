import * as React from "react";
import { useState, useEffect } from "react";
// import '../styles/HomePage.css';
import * as constructionSign from "../assets/under-construction.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const HomePage = () => {
  useEffect(() => {
    makeAnAlert();
  }, []);

  return <div className="container">Hello there!!</div>;
};

function makeAnAlert() {
  console.log("blah");
}

export default HomePage;
