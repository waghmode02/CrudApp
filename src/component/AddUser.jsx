import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/add.css";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddUser = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(users);
  const navigate=useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("https://crudapp-j5le.onrender.com/api/create", user)
      .then((Response) => {
        toast.success('Data added successfully')
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="addUser">
      <Link to={"/"} className="back"> Back</Link>
      <h3>Add new user</h3>
      <form className="userForm" onSubmit={submitForm }>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First name"
            onChange={inputHandler}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last name"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter email"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password" 
            autoComplete="off"
            placeholder="Enter password"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <button type="submit" id="btn" >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
