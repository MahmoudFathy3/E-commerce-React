import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BiShowAlt } from "react-icons/bi";

import styles from "./Product.module.css";

const List = ({ Product, AddCartHandler, ShowItemHandle, setShowItem }) => {
  return (
    <div key={Product.id} className={styles.info}>
      <span>
        <BiShowAlt
          style={{ cursor: "pointer" }}
          onClick={() => {
            ShowItemHandle(Product);
            setShowItem(true);
          }}
        />
      </span>
      <div className={styles.imgs}>
        <img src={Product.image} alt="" />
      </div>
      <div className={styles.title}>
        <h4>{Product.title.slice(0, 20)}</h4>
        <span>${Product.price}</span>
      </div>
      <div className={styles.Desc}>
        <p>{Product.description}</p>
      </div>
      <div className={styles.Review}>
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

        <button
          type="submit"
          onClick={() => AddCartHandler(Product, Product.price)}
        >
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default List;
