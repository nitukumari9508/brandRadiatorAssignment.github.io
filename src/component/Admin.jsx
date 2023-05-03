import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getContact")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      {localStorage.getItem("token") ? (
        <div>
          <h2>Admin Dashboard</h2>
          <button onClick={handleLogout}>Logout</button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
          <button onClick={() => {window.location.href='/login'}}>Login</button>
        </div>
      )}
    </>
  );
};

export default Admin;
