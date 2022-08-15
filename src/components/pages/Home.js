import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = new useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user,index) =>(
                    <tr key={user.id}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-primary mr-5" to='#'>Details</Link>
                            <Link className="btn btn-success mr-2" to='#'>Edit</Link>
                            <Link className="btn btn-danger mr-2"  to='#'>Delete</Link>
                        </td>
                    </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
