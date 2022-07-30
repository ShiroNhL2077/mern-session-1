import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from './user.png'

export default function Home() {
  const [users, setUsers] = useState([]);
  const getAll = () => {
    axios
      .get("http://localhost:3000/get")
      .then((_data) => {
        setUsers(_data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className="vh-100 container d-flex align-items-center" id="home">
      <div className="row row-cols-md-3 row-cols-2 h-75">
        {users &&
          users.map((usr) => (
            <div className="card g-2" key={usr._id}>
              <img src={logo} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{usr.name} {usr.lastname}</h5>
                <h6>{usr.age}</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

{/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

{
  /* {users && users.map(usr => (
        <li key={usr._id}>{usr.age}</li>
    ))} */
}
