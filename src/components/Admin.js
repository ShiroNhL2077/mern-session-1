import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Admin() {
  const [Name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Age, setAge] = useState(0);
  const [newUser, setNEwUser] = useState("");
  const [users, setUsers] = useState([]);
  const getAll = () => {
    axios
      .get("http://localhost:3000/get")
      .then((_data) => {
        setUsers(_data.data);
      })
      .catch((err) => console.log(err));
  };

  const addNewUser = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3000/add", {
        name: Name,
        lastname: lastName,
        age: Age,
      })
      .then(window.location.reload())
      .catch((err) => console.log(err));
  };

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:3000/update/${newUser}`, {
        name: Name,
        lastname: lastName,
        age: Age,
      })
      .then(window.location.reload())
      .catch((err) => console.log(err));
  };

  const deleteUser = (removeUser) => {
    axios
      .delete(`http://127.0.0.1:3000/delete/${removeUser}`, {
        name: Name,
        lastname: lastName,
        age: Age,
      })
      .then(window.location.reload())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div id="admin" className="container vh-100">
      <p className="display-3 text-center fw-bold text-primary shadow-sm">
        Welcome Back Master
      </p>
      <div className="row mt-5">
        <div className="col">
          <p className="lead fw-bolder text-center">Add New User</p>
          <form className="container" onSubmit={addNewUser}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                LastName
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              add new user
            </button>
          </form>
        </div>
        <div className="col">
          <p className="lead fw-bolder text-center">Delete User</p>
          {users &&
          users.map((usr) => (
            <p className="text-center btn w-100 m-0" key={usr._id} onClick={()=>deleteUser(usr._id)}>
              {usr.name} {usr.lastname}
            </p>
          ))}
        </div>
        <div className="col">
          <p className="lead fw-bolder text-center">Update User</p>
          {users &&
          users.map((usr) => (
            <p className="text-center btn w-100 m-0" key={usr._id} onClick={()=>updateUser()}>
              {usr.name} {usr.lastname}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
