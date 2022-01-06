import React from "react";
import styles from "./Info.module.css";

const Info = ({ setActive, active }) => {
  return (
    <div className={styles.info}>
      <h3
        onClick={() => setActive("Login")}
        className={`${active === "Login" ? styles.active : ""}`}
      >
        Login
      </h3>

      <h3
        onClick={() => setActive("Register")}
        className={`${active === "Register" ? styles.active : ""}`}
      >
        Register
      </h3>
    </div>
  );
};

export default Info;
