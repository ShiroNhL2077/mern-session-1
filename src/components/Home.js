import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

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
      {/* 
        <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
       */}

      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper row row-cols-md-3 row-cols-2 h-75"
      >
        {users &&
          users.map((usr) => (
            <SwiperSlide className="card">
              {console.log(usr)}
              <img
                src={usr.logo}
                className="card-img-top h-50 w-50 mt-4 rounded-circle img-fluid"
                alt="..."
              />
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">
                  Name : {usr.name} {usr.lastname}{" "}
                </h5>
                <h5 className="card-title">Age : {usr.age} </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="btn btn-primary w-100 mt-5"
                  onClick={() => {
                    console.log("555555", usr);
                    Swal.fire({
                      imageUrl: `${usr.logo}`,
                      imageHeight: 300,
                      title: `<h1>Name: ${usr.name} ${usr.lastname}</h1>
                      <p>Age: ${usr.age}<br>Skills: ${usr.skills}</p>`,
                      showCloseButton: true,
                      focusConfirm: false,
                    });
                  }}
                >
                  Profile
                </button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

{
  /* {users && users.map(usr => (
        <li key={usr._id}>{usr.age}</li>
    ))} */
}

{
  /* <div className="row row-cols-md-3 row-cols-2 h-75">
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
      </div> */
}
