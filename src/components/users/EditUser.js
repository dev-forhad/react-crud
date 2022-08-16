

import React, { useEffect, useState } from "react";
import classes from "./AddUser.module.css"
import axios from "axios";
import {useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const EditUser = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [user, setUser] = new useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit= async e => {
        debugger;
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        navigate("/");
    }

    useEffect(()=>{
        loadUserData();
    },[])

    const loadUserData = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }

    return (
        <div className={classes.form_box}>
            <h1>Edit User</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input className="form-control"  type="text" name="name" value={name} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label for="name">Username</label>
                    <input className="form-control"  type="text" name="username" value={username} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input className="form-control"  type="email" name="email" value={email} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label for="name">Phone</label>
                    <input className="form-control"  type="text" name="phone" value={phone} onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label for="message">Website</label>
                    <input className="form-control"  type="text" name="website" value={website} onChange={e => onInputChange(e)} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn btn-sm btn-primary mt-2 me-1"> Update </button>
                    <Link className="btn btn-sm btn-success  mt-2 " to={"/"}>Back to Home</Link>
                </div>
                

            </form>
        </div>
    )
}

export default EditUser;