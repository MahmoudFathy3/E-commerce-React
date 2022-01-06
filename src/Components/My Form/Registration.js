import React, { useState } from "react";
import styles from "./Registration.module.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Info from "./Info/Info";

const Registration = ({ setDash }) => {
  const [active, setActive] = useState("Login");

  //ADD new User
  const AddNewUser = async (user) => {
    await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  return (
    <div className={styles.Registration}>
      <div className="container">
        <Info active={active} setActive={setActive} />

        {active === "Login" ? (
          <Login />
        ) : (
          <Register AddNewUser={AddNewUser} setDash={setDash} />
        )}
      </div>
    </div>
  );
};

export default Registration;
