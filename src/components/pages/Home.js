import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const Home = () => {
  const [users, setUsers] = new useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };


  const deleteUser =  id => {
    debugger;
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to delete this item?',
      buttons: [
        {
          label: 'Yes',
          onClick:async () => {
            await axios.delete(`http://localhost:3003/users/${id}`);
            loadUsers();
          }
        },
        {
          label: 'No',
        }
      ]
    });

    
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
              <th className="text-center">Actions</th>
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
                        <td align="center">
                            <Link data-toggle="modal" data-target="#exampleModal" className="btn btn-sm btn-primary mr-5 me-1" to={`/users/details/${user.id}`}><i class="bi bi-card-text"></i></Link>
                            <Link className="btn btn-sm btn-success mr-2 me-1" to={`/users/edit/${user.id}`}><i class="bi bi-wrench-adjustable"></i></Link>
                            <Link className="btn btn-sm btn-danger mr-2" to='#'  onClick={() => deleteUser(user.id)}><i class="bi bi-trash"></i></Link>
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
