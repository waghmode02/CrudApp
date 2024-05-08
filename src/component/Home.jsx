import React, { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/home.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fechData = async () => {
      const response = await axios.get("https://crudapp-j5le.onrender.com/api/getall");
      setUsers(response.data);
    };
    fechData();
  }, []);

  const deleteUser = async (userId) => {
    await axios
      .delete(`https://crudapp-j5le.onrender.com/api/delete/${userId}`)
      .then((response) => {
        setUsers((prev) => prev.filter((user) => user._id !== userId));
        toast.success('Data deleted successfully')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
      <diV className="userTable">
      <Link to={"/add"} className="addBtn">
          Add User
        </Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>User name</th>
              <th>User Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td>{idx + 1}</td>
                <td>
                  {user.fname} {user.lname}
                </td>
                <td>{user.email}</td>
                <td className="actionBtn">
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                  <Link to={`/edit/` + user._id}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       

      </diV>
    </>
  );
};

export default Home;
