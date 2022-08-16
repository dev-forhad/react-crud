import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsUser = () =>{
    const [user, setUser] = new useState([])
    const {id} =  new useParams();
    
    useEffect(()=>{
        loadUserData();
    },[])

    const loadUserData = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    }


    return (
        <div className="container">
            <table class="table table-hover table-sm">
            <caption>List of users</caption>
                <tbody>
                <tr>
                    <th>Name</th>
                    <td>{user.name}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailsUser;