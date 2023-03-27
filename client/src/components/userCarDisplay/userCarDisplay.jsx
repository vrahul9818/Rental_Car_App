import React, { useContext, useState} from "react";
import { DataContext } from "../user_booking/user_data_context";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import carImage from "../../front_image/self-drive-norwa-car-people.png"
import "./userCarDisplay.css";

const UserCarDisplay = () => {
    const [showDropdown,setShowDropdown]= useState(false);
  const {
    startDate,
    endDate,
    origin,
    destination,
  } = useContext(DataContext);
  const navigate = useNavigate();

  const handleModify = () => {
    navigate("/userBooking")
  };
  const handelUserBooking = () => {
    navigate("/mybooking")
  };
  return (
    <>

      <Navbar />
      <div className="second_bar">
          <p className="origin">{origin? origin : "origin"}</p>
          <p className="destination">{destination?destination:"destination"}</p>
          <p className="startDate">{startDate ? startDate : "startDate"}</p>
          <p className="endDate">{endDate ? endDate : "endate"}</p>
          <button className="modify" onClick={handleModify}>Modify</button> 
         </div>
    <div className="third_bar">
       <div className="carTypeContainer">
       <p className="carTypeText" onClick={() => setShowDropdown(!showDropdown)}>Car Type </p>
       {showDropdown && (
       <div className="carTypeDropdown">
          <select id="carType" on>
          <option value="XUV">XUV</option>
          <option value="UV">UV</option>
          <option value="all">All</option>
          </select>
        </div>)}    
  </div>
        <p className="Seating">Seating</p>
        <p className="Milage">Milage</p>
        <p className="Other">Other</p>
</div>
<div className="cardContainer">
  <div className="card">
    <img src={carImage} alt="Car" class="carImage" />
    <div className="carDetailsTop">
      <p className="carCapacity">6 passenger</p>
      <div className="car_name_fare">
      <p className="carName">innova</p>
      <p className="carPerKm">Rs.200/km</p>
      </div>
     
    </div>
    <div className="carDetailsBottom">
      <p className="fare">carfare</p>
      <p onClick={handelUserBooking} className="bookNow">Book Now</p>
    </div>
  </div>
</div>
  </>
  );
};

export default UserCarDisplay;
