import React from "react";
import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className={classes.Navbar}>
      <div className={classes.BrandName}></div>
      <div className={classes.NavItems}>
        <div>
          <NavLink activeClassName={classes.active} to="/howitworks">
            How it works series
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName={classes.active} to="/faqs">
            FAQ
          </NavLink>
        </div>
        <div>
          <NavLink
            className={classes.registerButton}
            activeClassName={classes.active}
            to="/signUp"
          >
            REGISTER
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
