import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admincarDisplay.css"
import { useNavigate } from "react-router-dom";

const AdminCarDisplay = () => {
  const navigate = useNavigate();
  console.log(localStorage.getItem("token_admin"));
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const handelonclick = () =>{
    navigate("/AdminForm")
  }

  const url = "http://localhost:8080/car_rent/adminCarData";
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token_admin")}`,
        },
      })
      .then((response) => {
        console.log(response.data.carBookingData);
        setData(response.data.carBookingData);
        console.log(response.data.name);
        setName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data, "data");
  return (
    <div>
    <div className="adminNavbar">
      navbar
    </div>
    <div className="container">
      <div className="hello_admin_name">
      <h1 className="Admin_name">{`Hello ${name}`}</h1>
      </div>
       
      <div className="car_add_CarButton">
          <h3 className="car_name">Car</h3>
          <button onClick={handelonclick} className="addCar">ADD CAR</button>
      </div>
      <div className="admin_car_card">
        {
          data.map((key , index )=>{
            return(<>
            <div className="car_card">
            <img className="car_image" src={url+`/images/${key?.images[0]}`}
            alt="image" />
           <p className="car_passenger">6 passenger</p>
           <div className="car_detail">
           <p className="carName">{key.carName}</p>
           <p className="car_price">200 rs/km</p>
            </div>
           <p className="available_from">{key.availableFrom}</p>
  <p className="available_to">{key.availableTo}</p>
</div>


            </>)
          })
        }
      </div>
    </div>
  </div>
  );
};

export default AdminCarDisplay;



