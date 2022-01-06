import React from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.Slider}>
      <div className="container">
        <div className={styles.info}>
          <h3>Best Offer</h3>
          <p>New Arrivals on sale</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
