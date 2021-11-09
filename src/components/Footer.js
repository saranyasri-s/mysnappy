import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className={classes.availableOn}>
        <p> Available on</p>
        <div>Apple</div>
        <div>Android</div>
        <div>Windows</div>
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
