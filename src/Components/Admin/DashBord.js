import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavAdmin from "./Navbar/Navbar";
import AddProduct from "./ProductAdmin/AddProduct/AddProduct";
import ProductAdmin from "./ProductAdmin/ProductAdmin";
import Customer from "./Customer/Customer";
import UserAdmin from "./UserAdmin/UserAdmin";

const DashBord = ({ setDash, Product, DeleteHandler }) => {
  useEffect(() => {
    setDash(false);
  }, [setDash]);

  //Add New Product
  const AddNewProduct = async (NewProduct) => {
    await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(NewProduct),
    });
  };

  return (
    <Fragment>
      <NavAdmin setDash={setDash} />
      <Routes>
        <Route
          path="/ProductAdmin"
          element={
            <ProductAdmin Product={Product} DeleteHandler={DeleteHandler} />
          }
        />
        <Route
          path="/AddProduct"
          element={<AddProduct AddNewProduct={AddNewProduct} />}
        />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/UserAdmin" element={<UserAdmin />} />
      </Routes>
    </Fragment>
  );
};

export default DashBord;
