import React, { useState, useCallback, useEffect } from "react";
import styles from "./Customer.module.css";

const Customer = () => {
  const [Customer, setCustomer] = useState([]);

  const GetUser = useCallback(async () => {
    await fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => {
        return setCustomer(data);
      });
  }, [setCustomer]);

  useEffect(() => {
    GetUser();
  }, [GetUser]);

  //Remove  Customer
  const RemoveCustomer = async (id) => {
    await fetch(`http://localhost:3000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomer((Prev) => {
          return Customer.filter((user) => user.id !== id);
        });
      });
  };

  const DataCustomer = Customer.length ? (
    Customer.map((data) => {
      return data.type === "Customer" ? (
        <table key={data.id}>
          <thead>
            <tr>
              <th className={styles.id}>id</th>
              <th className={styles.Name}>Name</th>
              <th className={styles.Password}>Password</th>
              <th className={styles.Email}>Email</th>
              <th className={styles.Type}>Type</th>
              <th className={styles.Action}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.password}</td>
              <td>{data.email}</td>
              <td>{data.type}</td>
              <td>
                <button type="submit" onClick={() => RemoveCustomer(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        ""
      );
    })
  ) : (
    <p>There is no Customer Data</p>
  );

  console.log(Customer);
  return (
    <div className={styles.Customers}>
      <div className="container">
        <h2>Manage Customer</h2>
        {DataCustomer}
      </div>
    </div>
  );
};

export default Customer;
