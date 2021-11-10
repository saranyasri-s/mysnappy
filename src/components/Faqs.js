import React, { useState } from "react";
import { Route } from "react-router";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import classes from "./Faqs.module.css";

function Faqs() {
  const [qns, setQns] = useState([{ qn: "qn1", answer: "answer1" }]);
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
