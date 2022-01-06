import React from "react";
import styles from "./ProductList.module.css";

function ProductList({ item, DeleteHandler }) {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th className={styles.title}>Title</th>
            <th className={styles.Description}>Description</th>
            <th className={styles.Price}>Price</th>
            <th className={styles.Image}>Image</th>
            <th className={styles.Action}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>${item.price}</td>
            <td>
              <img src={item.image} alt="" />
            </td>
            <td>
              <span>Edit</span>
              <span onClick={() => DeleteHandler(item.id)}>Delete</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
