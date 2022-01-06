import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = ({ AddNewUser }) => {
  const [Register, setRegister] = useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    password: "",
    email: "",
    type: "",
  });

  const Navigate = useNavigate();

  const ChangeHandler = (e) => {
    setRegister({ ...Register, [e.target.id]: e.target.value });
  };

  const SumbitHandler = (e) => {
    e.preventDefault();
    if (Register.name && Register.password && Register.email && Register.type) {
      if (Register.type === "Admin") {
        Navigate("/Login");
      } else {
        Navigate("/");
      }
      AddNewUser(Register);
      setRegister({
        name: "",
        password: "",
        email: "",
        type: "",
      });
    } else {
      alert("input Empty");
    }
  };

  return (
    <form className={styles.Register} onSubmit={SumbitHandler}>
      <input
        type="text"
        placeholder="Your Name "
        value={Register.name}
        id="name"
        onChange={ChangeHandler}
      />
      <input
        type="password"
        placeholder="Your Password "
        value={Register.password}
        id="password"
        onChange={ChangeHandler}
      />
      <input
        type="email"
        placeholder="Your Email "
        value={Register.email}
        id="email"
        onChange={ChangeHandler}
      />
      <select onChange={ChangeHandler} id="type" value={Register.type}>
        <option>Select Your Type</option>
        <option value="Customer">Customer</option>
        <option value="Admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
