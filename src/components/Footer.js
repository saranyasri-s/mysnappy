import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";
import { DiWindows } from "react-icons/di";
function Footer() {
  return (
    <>
      <div className={classes.availableOn}>
        <p> Available on</p>
        <div>
          <DiApple />
        </div>

        <div>
          <DiAndroid />
        </div>

        <div>
          <DiWindows />
        </div>
      </div>
      <div className={classes.FooterAbove}>
        <div className={classes.footerImage}></div>
        <p>Sample Street</p>
        <p>New York, NY 10000</p>
        <p>+1-203-550-0144</p>
        <p>infor@mysnappyshow.com</p>
      </div>
      <div className={classes.Footer}>
        <div>
          <Link to="/TandC">Support Privacy </Link>
        </div>
        <div>
          <Link to="/TandC">Cookie Policy </Link>
        </div>
        <div>
          <Link to="/TandC">Manage Cookies </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
