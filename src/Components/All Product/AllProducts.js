import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BiShowAlt } from "react-icons/bi";
import styles from "./AllProduct.module.css";

const AllProducts = ({
  Product,
  AddCartHandler,
  ShowItemHandle,
  setShowItem,
}) => {
  const Products = Product.map((item) => {
    return (
      <div className={styles.info} key={item.id}>
        <span>
          <BiShowAlt
            style={{ cursor: "pointer" }}
            onClick={() => {
              ShowItemHandle(item);
              setShowItem(true);
            }}
          />
        </span>
        <div className={styles.imgs}>
          <img src={item.image} alt="" />
        </div>
        <div className={styles.title}>
          <h4>{item.title.slice(0, 25)}</h4>
          <span>${item.price}</span>
        </div>
        <div className={styles.Desc}>
          <p>{item.description}</p>
        </div>

        <div className={styles.Review}>
          <i>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </i>

          <button
            type="submit"
            onClick={() => AddCartHandler(item, item.price)}
          >
            Add Cart
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.AllProducts}>
      <div className="container">{Products}</div>
    </div>
  );
};

export default AllProducts;
