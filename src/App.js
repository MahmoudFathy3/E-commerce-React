import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import IndexPage from "./Components/index/Myindex";
import Registration from "./Components/My Form/Registration";
import Contact from "./Components/Contact/Contact";
import DashBord from "./Components/Admin/DashBord";
import AllProducts from "./Components/All Product/AllProducts";
import ModelCart from "./Components/ModelCart/ModelCart";
import MobelProduct from "./Components/Model Product/MobelProduct";

function App() {
  const [Product, setProduct] = useState([]);
  const [Dash, setDash] = useState(true);
  const [counter, setCounter] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [Cart, setCart] = useState([]);
  const [Price, setPrice] = useState(0);
  const [Item, setItem] = useState("");
  const [showItem, setShowItem] = useState(false);

  //Get Items with Json Server
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, []);

  // Add to Cart
  const AddCartHandler = useCallback(
    (NewProduct, price) => {
      const Prices = Math.floor(Price + price);
      setCounter(counter + 1);
      setCart((Prev) => {
        return [...Prev, NewProduct];
      });
      setPrice(Prices);
    },
    [setPrice, Price, setCart, setCounter, counter]
  );

  //Remove item to Cart
  const RemoveItemCart = useCallback(
    (id, price) => {
      const Prices = Math.floor(Price - price);
      setCart((Prev) => {
        return Cart.filter((item) => item.id !== id);
      });
      setCounter(counter - 1);
      setPrice(Prices);
    },
    [setPrice, setCounter, Price, counter, setCart, Cart]
  );

  //Delete Item with Json
  const DeleteHandler = async (id) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct((prev) => {
          return Product.filter((item) => item.id !== id);
        });
      });
  };

  const ShowItemHandle = (item) => {
    setItem(item);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {Dash ? <Navbar counter={counter} setShowCart={setShowCart} /> : ""}
        <Routes>
          <Route
            path="/"
            element={
              <IndexPage
                Product={Product}
                AddCartHandler={AddCartHandler}
                ShowItemHandle={ShowItemHandle}
                setShowItem={setShowItem}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Registration setDash={setDash} />} />

          <Route
            path="/DashBord/*"
            element={
              <DashBord
                setDash={setDash}
                Product={Product}
                DeleteHandler={DeleteHandler}
              />
            }
          />
          <Route
            path="/AllProducts"
            element={
              <AllProducts
                Product={Product}
                AddCartHandler={AddCartHandler}
                ShowItemHandle={ShowItemHandle}
                setShowItem={setShowItem}
              />
            }
          />
        </Routes>
        {showCart ? (
          <ModelCart
            setShowCart={setShowCart}
            Cart={Cart}
            RemoveItemCart={RemoveItemCart}
            Price={Price}
          />
        ) : (
          ""
        )}
        {showItem ? <MobelProduct Item={Item} setShowItem={setShowItem} /> : ""}
      </BrowserRouter>
    </div>
  );
}

export default App;
