import React from "react";
import classes from "./PicturesCollage.module.css";
function PicturesCollage() {
  return (
    <div className={classes.picsCollage}>
      <div>
        <div className={classes.bird5}></div>
        <div className={classes.bird6}></div>
        <div className={classes.bird7}></div>
      </div>
      <div>
        <div className={classes.bird1}></div>

        <div className={classes.bird3}></div>
        <div className={classes.bird4}></div>
      </div>
      <div>
        <div className={classes.bird5}></div>
        <div className={classes.bird6}></div>
        <div className={classes.bird7}></div>
      </div>
    </div>
  );
}

export default PicturesCollage;
