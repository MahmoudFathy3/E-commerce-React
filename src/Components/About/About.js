import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.About}>
      <div className="container">
        <h2>About Sixteen Clothing</h2>
        <div className={styles.info}>
          <h4>Looking for the best products? </h4>
          <p>
            Pellentesque at ipsum tempor nisi laoreet finibus. Donec consectetur
            quam tortor, ut tempor eros rhoncus finibus. Aenean cursus a elit
            vel volutpat. Cras auctor et massa eget congue vest nec.
          </p>
          <ul>
            <li>
              <Link to="">Lorem ipsum dolor sit amet</Link>
            </li>
            <li>
              <Link to="">Consectetur an adipisicing elit </Link>
            </li>
            <li>
              <Link to="">It aquecorporis nulla aspernatur</Link>
            </li>
            <li>
              <Link to="">Corporis, omnis doloremque </Link>
            </li>
            <li>
              <Link to="">Non cum id reprehenderit</Link>
            </li>
          </ul>
          <button>Read More..</button>
        </div>
        <div className={styles.info}>
          <img src="./image/feature-image.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
