import React, { useEffect, useState } from "react";
import { Link, useParams , useNavigate} from "react-router-dom";
import axios from "axios";
import "../style/edit.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditUser = () => {

  const initialUser = {
    fname: "",
    lname: "",
    email: ""
  };

const [user, setUser] = useState(initialUser);
const navigate=useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://crudapp-j5le.onrender.com/api/getone/${id}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); 
  }, [id]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://crudapp-j5le.onrender.com/api/update/${id}`, user);
      navigate("/");
      toast.success('User updated successfully');
    } catch (error) {
      console.log(error);
      toast.error('Failed to update user');
    }
  };
  

  return (
    <div className="addUser">
      <Link to={"/"}> Back</Link>
      <h3>Edit User</h3>
      <form className="userForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={user.fname}
            autoComplete="off"
            placeholder="First name"
            onChange={inputChangeHandler}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={user.lname}
            autoComplete="off"
            placeholder="Last name"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            autoComplete="off"
            placeholder="Enter email"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputGroup">
          <button type="submit" id="btn">Update User</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
