import React from "react";
import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className={classes.Navbar}>
      <Link to="/">
        <div className={classes.BrandName}></div>
      </Link>
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
            to="/auth/SignUp"
          >
            REGISTER
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
