import React, { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./ModelCart.module.css";

const Carts = ({ items, setShowCart, RemoveItemCart, Price }) => {
  const NewItem = items.length ? (
    items.map((item) => {
      return (
        <div className={styles.items} key={item.id}>
          <span>{item.title.slice(0, 10)}</span>
          <span>${item.price}</span>
          <img src={item.image} alt="" />
          <button onClick={() => RemoveItemCart(item.id, item.price)}>
            Remove
          </button>
        </div>
      );
    })
  ) : (
    <p style={{ textAlign: "center", margin: "20px auto" }}>
      There are No Items in The Cart
    </p>
  );

  return (
    <div className={styles.Cart} onClick={() => setShowCart(true)}>
      {NewItem}
      <h2 style={{ padding: "5px" }}> {Price > 0 ? `Total: $${Price}` : ""}</h2>
    </div>
  );
};

const ModelCart = ({ setShowCart, Cart, RemoveItemCart, Price }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <div className={styles.ModelCart}>
          <div
            className={styles.overLay}
            onClick={() => setShowCart(false)}
          ></div>
          <Carts
            items={Cart}
            setShowCart={setShowCart}
            RemoveItemCart={RemoveItemCart}
            Price={Price}
          />
        </div>,
        document.getElementById("Cart")
      )}
    </Fragment>
  );
};

export default ModelCart;
