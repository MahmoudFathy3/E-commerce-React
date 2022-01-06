import React from "react";
import { BsStarFill } from "react-icons/bs";
import styles from "./ModelProduct.module.css";

const Items = ({ Item }) => {
  return (
    <div className={styles.Items}>
      <div className={styles.info}>
        <div className={styles.images}>
          <img src={Item.image} alt="" />
        </div>
        <div className={styles.box}>
          <h3>{Item.title}</h3>
          <span>${Item.price}</span>
          <p>{Item.description}</p>
          <div className={styles.Review}>
            <button>Add Cart</button>
            <div>
              <i>
                <BsStarFill />
              </i>
              <i>
                <BsStarFill />
              </i>
              <i>
                <BsStarFill />
              </i>
              <i>
                <BsStarFill />
              </i>
              <i>
                <BsStarFill />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
