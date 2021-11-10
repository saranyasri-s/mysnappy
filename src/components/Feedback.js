import React from "react";
import classes from "./Feedback.module.css";
function Feedback() {
  return (
    <div style={{ padding: "1.3rem" }} className={classes.Feedback}>
      <p>Testimonials</p>
      <h1>What people say about Us</h1>
      <div className={classes.Feedbacks}>
        <div className={classes.feed}>
          <p className={classes.comment}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            porta at facilisis vitae aliquam viverra. Ut sed iaculis eget
            gravida pellentesque augue convallis
          </p>
          <div>
            <div className={classes.image}></div>
            <p>Norma Jean ThomasVisitor / Curator</p>
          </div>
        </div>

        <div className={classes.feed}>
          <p className={classes.comment}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            porta at facilisis vitae aliquam viverra. Ut sed iaculis eget
            gravida pellentesque augue convallis
          </p>
          <div>
            <div className={classes.image}></div>
            <p>Norma Jean ThomasVisitor / Curator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
