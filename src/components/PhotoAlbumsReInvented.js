import React from "react";
import classes from "./PhotoAlbumsReInvented.module.css";
import { Link } from "react-router-dom";
function PhotoAlbumsReInvented() {
  return (
    <div className={classes.PhotoAlbumsReInvented}>
      <div>
        <p>Welcome</p>
        <h4>Photo Albums Reinvented</h4>
        <p>The fastest way to yuor most beautiful album</p>
        <p>Share online or order as photobook</p>
      </div>
      <div className={classes.buttons}>
        <div>
          <Link className={classes.Qr} to="/">Log In by QR code</Link>
        </div>
        <div>
          <Link className={classes.SignIn} to="/SignIn">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default PhotoAlbumsReInvented;
