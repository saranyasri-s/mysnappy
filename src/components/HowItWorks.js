import React from "react";
import { Route } from "react-router";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import classes from "./HowItWorks.module.css";
function HowItWorks() {
  return (
    <div>
      <Navbar></Navbar>
      <h4 className={classes.howitworks}>How it works</h4>
      <div className={classes.mp4}>
        <p>Landscape1.Mp4</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HowItWorks;
