import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "./store/AuthContext";
function Navbar() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const LogoutHandler = () => {
    authCtx.logOut();
    navigate("/auth/Login");
  };
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
