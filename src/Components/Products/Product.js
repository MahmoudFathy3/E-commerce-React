import React, { Fragment } from "react";
import { useNavigate } from "react-router";
import List from "./Lists";
import styles from "./Product.module.css";

const Products = ({ Product, AddCartHandler, setShowItem, ShowItemHandle }) => {
  const Items = [];
  const Navigate = useNavigate();
  const Data = Product.map((Product) => {
    return (
      <Fragment key={Product.id}>
        <List
          Product={Product}
          AddCartHandler={AddCartHandler}
          setShowItem={setShowItem}
          ShowItemHandle={ShowItemHandle}
        />
      </Fragment>
    );
  });

  for (let i = 0; i < 8; i++) {
    Items.push(Data[i]);
  }

  const ViewAllProducts = () => {
    Navigate("/AllProducts");
  };

  return (
    <div className={styles.Products}>
      <div className="container">
        <div className={styles.List}>
          <small>Latest Products</small>
          <span onClick={ViewAllProducts}>View All Products</span>
        </div>
        {Items}
      </div>
    </div>
  );
};

export default Products;
