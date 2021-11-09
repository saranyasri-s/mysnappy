import React from "react";
import { Route } from "react-router";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import classes from "./Faqs.module.css";

function Faqs() {
  return (
    <div>
      <Navbar></Navbar>

      <div className={classes.faq}>
        <p>Faqs</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Faqs;
