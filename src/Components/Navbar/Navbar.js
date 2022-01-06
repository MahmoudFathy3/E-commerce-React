import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "./Navbar.module.css";

const Navbar = ({ counter, setShowCart }) => {
  return (
    <header>
      <div className="container">
        <div className={styles.Navbar}>
          <i className={styles.logo}>
            <span>SIXTEEN</span> CLOTHING
          </i>
          <nav>
            <ul className={styles.list}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Featurn">Featurn</Link>
              </li>
              <li>
                <Link to="/Servers">Servers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className={styles.Login}>
              <Link to="/Login">Registration</Link>
            </div>

            <div className={styles.Cart}>
              <span onClick={() => setShowCart(true)}>
                <BsFillCartPlusFill />
              </span>
              <h4>{counter > 0 ? counter : ""}</h4>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
