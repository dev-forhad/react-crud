import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <a className="navbar-brand" href="/">React App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    
                </ul>

            </div>
            <button className="btn btn-success">Add User</button>
            </div>
        </nav>
    )
}

export default Navbar;