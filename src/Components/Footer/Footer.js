import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className="container">
        <div className={styles.info}>
          <div className={styles.box}>
            <h2>Creative & Unique Sixteen Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              corporis amet elite author nulla.
            </p>
          </div>
          <button>Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
