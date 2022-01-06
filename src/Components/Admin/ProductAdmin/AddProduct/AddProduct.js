import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./AddProduct.module.css";

const AddProduct = ({ AddNewProduct }) => {
  const [NewProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const Navigate = useNavigate();

  const ChangeHandler = (e) => {
    setNewProduct({ ...NewProduct, [e.target.id]: e.target.value });
  };

  const SumbitHandler = (e) => {
    e.preventDefault();
    if (
      NewProduct.title &&
      NewProduct.description &&
      NewProduct.price &&
      NewProduct.image
    ) {
      console.log(NewProduct);
      AddNewProduct(NewProduct);
      setNewProduct({
        title: "",
        description: "",
        price: "",
        image: "",
      });
      Navigate("/DashBord/ProductAdmin");
    } else {
      alert("Please fill in the blanks!");
    }
  };

  // console.log();
  return (
    <div className={styles.AddProduct}>
      <h2>Add Product</h2>
      <form className={styles.form} onSubmit={SumbitHandler}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Name Title.."
          value={NewProduct.title}
          onChange={ChangeHandler}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          value={NewProduct.description}
          onChange={ChangeHandler}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          placeholder="Price"
          value={NewProduct.price}
          onChange={ChangeHandler}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          value={NewProduct.image}
          onChange={ChangeHandler}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
