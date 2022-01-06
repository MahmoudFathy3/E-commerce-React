import React, { Fragment } from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Products from "../Products/Product";
import Slider from "../Slider/Slider";

const IndexPage = ({
  Product,
  AddCartHandler,
  ShowItemHandle,
  setShowItem,
}) => {
  return (
    <Fragment>
      <Slider />
      <Products
        Product={Product}
        AddCartHandler={AddCartHandler}
        ShowItemHandle={ShowItemHandle}
        setShowItem={setShowItem}
      />
      <About />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
