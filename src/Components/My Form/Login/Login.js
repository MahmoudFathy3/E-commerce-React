import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [Data, setData] = useState("");
  const [value, setValue] = useState({
    password: "",
    email: "",
  });
  const Navigate = useNavigate();

  const ChangeHandler = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  //Get All Data user
  const CheckEmail = useCallback(async () => {
    await fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => {
        return setData(data);
      });
  }, [setData]);

  useEffect(() => {
    CheckEmail();
  }, [CheckEmail]);

  //Sumbit user
  const SumbitHandler = (e) => {
    e.preventDefault();
    Data.find((user) => {
      return user.email === value.email && user.password === value.password
        ? (user.type === "Admin"
            ? setTimeout(() => {
                Navigate("/DashBord");
              }, 200)
            : "") ||
            (user.type === "Customer"
              ? setTimeout(() => {
                  Navigate("/");
                }, 100)
              : "")
        : setError(true);
    });
  };

  return (
    <form className={styles.Login} onSubmit={SumbitHandler}>
      <input
        type="Email"
        placeholder="You Email.."
        id="email"
        value={value.email}
        onChange={ChangeHandler}
      />
      <input
        type="password"
        placeholder="You Password.."
        id="password"
        value={value.password}
        onChange={ChangeHandler}
      />
      <button type="submit">Submit</button>
      {error ? <p>Sorry Your have Error!</p> : ""}
    </form>
  );
};

export default Login;
