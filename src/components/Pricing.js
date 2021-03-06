import React from "react";
import classes from "./Pricing.module.css";
import { Link } from "react-router-dom";
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
          <Link to="/auth/SignUp" className={classes.button}>
            REGISTER NOW
          </Link>
        </div>
        <div className={classes.plan}>
          <p>Gold</p>
          <h4>$20/month</h4>

          <p>Unlimited albums,</p>
          <p>usage and storage</p>
          <p>Backup and download</p>
          <p>original photos</p>
          <p>Full HD photos and videos</p>
          <Link to="/auth/SignUp" className={classes.button}>
            REGISTER NOW
          </Link>
        </div>
        <div className={classes.plan}>
          <p>Platinum</p>
          <h4>$50/month</h4>

          <p>Unlimited albums,</p>
          <p>usage and storage</p>
          <p>Backup and download</p>
          <p>original photos</p>
          <p>Full HD photos and videos</p>
          <Link to="/auth/SignUp" className={classes.button}>
            REGISTER NOW
          </Link>
        </div>
        <div className={classes.plan}>
          <p>Super platinum</p>
          <h4>$100/month</h4>

          <p>Unlimited albums,</p>
          <p>usage and storage</p>
          <p>Backup and download</p>
          <p>original photos</p>
          <p>Full HD photos and videos</p>
          <Link to="/auth/SignUp" className={classes.button}>
            REGISTER NOW
          </Link>
        </div>
        <div className={classes.plan}>
          <p>Package 08-August-2021</p>
          <h4>$250/month</h4>

          <p>Unlimited albums,</p>
          <p>usage and storage</p>
          <p>Backup and download</p>
          <p>original photos</p>
          <p>Full HD photos and videos</p>
          <Link to="/auth/SignUp" className={classes.button}>
            REGISTER NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
