import React from "react";
import classes from "./ExperiencingMemories.module.css";
function ExperiencingMemories() {
  return (
    <div className={classes.ExperiencingMemories}>
      <div className={classes.left}>
        <h4>Experiencing Memories</h4>
        <p>The fastest way to your most beautiful album</p>
        <p>Share online or order as photobook</p>
        <p className={classes.viewPrices}>View prices</p>
      </div>
      <div className={classes.image}></div>
    </div>
  );
}

export default ExperiencingMemories;
