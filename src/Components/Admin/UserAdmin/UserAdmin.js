import React, { useCallback, useState, useEffect } from "react";
import styles from "./UserAdmin.module.css";

const UserAdmin = () => {
  const [Admin, setAdmin] = useState([]);

  const GetUser = useCallback(async () => {
    await fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => {
        return setAdmin(data);
      });
  }, [setAdmin]);

  useEffect(() => {
    GetUser();
  }, [GetUser]);

  //Remove  Admin
  const RemoveAdmin = async (id) => {
    await fetch(`http://localhost:3000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin((Prev) => {
          return Admin.filter((user) => user.id !== id);
        });
      });
  };

  const DataAdmin = Admin.length ? (
    Admin.map((data) => {
      return data.type === "Admin" ? (
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
                <button type="submit" onClick={() => RemoveAdmin(data.id)}>
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
    <p>There is no Admin Data</p>
  );

  return (
    <div className={styles.UserAdmin}>
      <div className="container">
        <h2>Manage Admin</h2>
        {DataAdmin}
      </div>
    </div>
  );
};

export default UserAdmin;
