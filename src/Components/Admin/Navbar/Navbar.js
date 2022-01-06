import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavAdmin = ({ setDash }) => {
  const HomePage = () => {
    setDash(true);
  };

  return (
    <div className={styles.NavAdmin}>
      <div className="container">
        <Link to="/" className={styles.HomePage} onClick={HomePage}>
          <span>Live</span> Page
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/DashBord">Home</Link>
            </li>
            <li>
              <Link to="/DashBord/ProductAdmin">Products</Link>
            </li>
            <li>
              <Link to="/DashBord/Customer">Customer</Link>
            </li>
            <li>
              <Link to="/DashBord/UserAdmin">User Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavAdmin;
