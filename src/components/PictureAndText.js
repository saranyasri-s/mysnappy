import React from "react";
import classes from "./PictureAndText.module.css";
function PictureAndText() {
  return (
    <div className={classes.PictureAndText}>
      <div>
        <div className={classes.image1}></div>
        <h1>Sample text</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Egestas nunc,
          pulvinar amet, ut scelerisque elit.
        </p>
      </div>
      <div>
        <div className={classes.image2}></div>
        <h1>Sample text</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Egestas nunc,
          pulvinar amet, ut scelerisque elit.
        </p>
      </div>
      <div>
        <div className={classes.image3}></div>
        <h1>Sample text</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Egestas nunc,
          pulvinar amet, ut scelerisque elit.
        </p>
      </div>
      <div>
        <div className={classes.image4}></div>
        <h1>Sample text</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Egestas nunc,
          pulvinar amet, ut scelerisque elit.
        </p>
      </div>
    </div>
  );
}

export default PictureAndText;
