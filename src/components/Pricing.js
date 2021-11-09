import React from "react";
import classes from "./Pricing.module.css";
function Pricing() {
  return (
    <div className={classes.pricing}>
      <h5>Pricing</h5>
      <div className={classes.plans}>
        <div className={classes.plan}>
          <p>Bronze</p>
          <h4>$10/month</h4>

          <p>Unlimited albums,</p>
          <p>usage and storage</p>
          <p>Backup and download</p>
          <p>original photos</p>
          <p>Full HD photos and videos</p>
          <div className={classes.button}>REGISTER NOW</div>
        </div>
        <div className={classes.plan}>
          <p>Gold</p>
          <h4>$10/month</h4>

          <p>Unlimited albums,</p>
          <p>usage and storage</p>
          <p>Backup and download</p>
          <p>original photos</p>
          <p>Full HD photos and videos</p>
          <div className={classes.button}>REGISTER NOW</div>
        </div>
        <div className={classes.plan}>
          <p>Platinum</p>
          <h4>$10/month</h4>

          <p>Unlimited albums,</p>
          <p>usage and storage</p>
          <p>Backup and download</p>
          <p>original photos</p>
          <p>Full HD photos and videos</p>
          <div className={classes.button}>REGISTER NOW</div>
        </div>
        <div className={classes.plan}>
          <p>Super platinum</p>
          <h4>$10/month</h4>

          <p>Unlimited albums,</p>
          <p>usage and storage</p>
          <p>Backup and download</p>
          <p>original photos</p>
          <p>Full HD photos and videos</p>
          <div className={classes.button}>REGISTER NOW</div>
        </div>
        <div className={classes.plan}>
          <p>Package 08-August-2021</p>
          <h4>$10/month</h4>

          <p>Unlimited albums,</p>
          <p>usage and storage</p>
          <p>Backup and download</p>
          <p>original photos</p>
          <p>Full HD photos and videos</p>
          <div className={classes.button}>REGISTER NOW</div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
