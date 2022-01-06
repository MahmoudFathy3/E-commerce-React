import React from "react";
import { useNavigate } from "react-router";
import styles from "./ProductAdmin.module.css";
import ProductList from "./ProductList/ProductList";

const ProductAdmin = ({ Product, DeleteHandler }) => {
  const Products = Product.map((item) => {
    return (
      <div key={item.id}>
        <ProductList item={item} DeleteHandler={DeleteHandler} />
      </div>
    );
  });
  const Navigate = useNavigate();

  const AddNewProduct = (e) => {
    Navigate("/DashBord/AddProduct");
  };

  return (
    <div className={styles.ProductAdmin}>
      <h2>Manage Products</h2>
      {Products}
      <button onClick={AddNewProduct}>Add New Product</button>
    </div>
  );
};

export default ProductAdmin;
