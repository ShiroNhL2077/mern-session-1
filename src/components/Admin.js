import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import Loader from "./Loader";

export default function Admin() {
  const [Name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Age, setAge] = useState(0);
  const [Logo, setLogo] = useState("");
  const [Skills, setSkills] = useState("");
  const [formName, setformName] = useState("");
  const [formLastName, setformLastName] = useState("");
  const [formAge, setformAge] = useState(0);
  const [formLogo, setformLogo] = useState("");
  const [formSkills, setformSkills] = useState("");
  const [users, setUsers] = useState([]);
  const [userToUpdate, setUserToUpdate] = useState("");
  const [Loading, setLoading] = useState(true);
  const getAll = () => {
    axios
      .get("http://localhost:3000/get")
      .then((_data) => {
        setUsers(_data.data);
      })
      .catch((err) => console.log(err));
  };

  const getOneUser = (userId) => {
    setUserToUpdate(userId);
    console.log(userId)
    axios.get(`http://127.0.0.1:3000/users/${userId}`)
    .then(_data => {
      setformName(_data.data.name);
      setformLastName(_data.data.lastname);
      setformAge(_data.data.age);
      setformLogo(_data.data.logo);
      setformSkills(_data.data.skills);
    })
    .catch(err => console.log(err))
  }

  const addNewUser = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3000/add", {
        name: Name,
        lastname: lastName,
        age: Age,
        logo: Logo,
        skills: Skills,
      })
      .then(window.location.reload())
      .catch((err) => console.log(err));
  };

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:3000/update/${userToUpdate}`, {
        name: Name.length === 0 ? formName : Name,
        lastname: lastName.length === 0 ? formLastName : lastName,
        age: Age === 0 ? formAge : Age,
        logo: Logo.length === 0 ? formLogo : Logo,
        skills: Skills.length === 0 ? formSkills : Skills,
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
        logo: Logo,
        skills: Skills,
      })
      .then(window.location.reload())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },3000);
  },[]);
    

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
            <div className="mb-3 ">
              <label htmlFor="exampleInputLogo" className="form-label">
                Logo
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLogo"
                onChange={(e) => setLogo(e.target.value)}
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputSkills" className="form-label">
                Skills
              </label>
              <textarea
                type="text"
                className="form-control"
                id="exampleInputSkills"
                onChange={(e) => setSkills(e.target.value)}/>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              add new user
            </button>
          </form>
        </div>
        <div className="col">
          <p className="lead fw-bolder text-center">Delete User</p>

          

          {users.length < 1 ? 

              <>
                {
                  Loading ? <Loader /> : <p className="lead text-center text-danger">No Users</p>
                }
              </>

            : (
            <>
              {users.map((usr) => (
                <p
                  className="text-center btn w-100 m-0"
                  key={usr._id}
                  onClick={() => deleteUser(usr._id)}
                >
                  {usr.name} {usr.lastname}
                </p>
              ))}
            </>
          )}
          {/* {users &&
            users.map((usr) => (
              <p
                className="text-center btn w-100 m-0"
                key={usr._id}
                onClick={() => deleteUser(usr._id)}
              >
                {usr.name} {usr.lastname}
              </p>
            ))} */}
        </div>
        <div className="col">
          <p className="lead fw-bolder text-center">Update User</p>
          {users.length < 1 ? 
          
          <>
          {
            Loading ? <Loader /> : <p className="lead text-center text-danger">No Users</p>
          }
        </>

          : (
            <>
              {users &&
                users.map((usr) => (
                  <p
                    className="text-center btn w-100 m-0"
                    key={usr._id}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => getOneUser(usr._id)}
                  >
                    {usr.name} {usr.lastname}
                  </p>
                ))}
            </>
          )}
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                UPDATE USER
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="container" onSubmit={updateUser}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder={formName}
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
                    placeholder={formLastName}
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
                    placeholder={formAge}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="mb-3 ">
              <label htmlFor="exampleInputLogo" className="form-label">
                Logo
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLogo"
                placeholder='Provide a url of an img'
                onChange={(e) => setLogo(e.target.value)}
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputSkills" className="form-label">
                Skills
              </label>
              <textarea
                type="text"
                className="form-control"
                id="exampleInputSkills"
                placeholder={formSkills}
                onChange={(e) => setSkills(e.target.value)}/>
            </div>

                <button type="submit" className="btn btn-primary w-100">
                  update user
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
