import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Items from "./Items";
import styles from "./ModelProduct.module.css";

const MobelProduct = ({ Item, setShowItem }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <div className={styles.Model}>
          <div
            className={styles.overLay}
            onClick={() => setShowItem(false)}
          ></div>
          <Items Item={Item} />
        </div>,
        document.getElementById("Cart")
      )}
    </Fragment>
  );
};

export default MobelProduct;
