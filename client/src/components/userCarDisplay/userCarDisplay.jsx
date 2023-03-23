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
  return (
    <>

      <Navbar />

      <div className="second_bar">
          <p className="origin">{origin}</p>
          <p className="destination">{destination}</p>
          <p className="startDate">{startDate}</p>
          <p className="endDate">{endDate}</p>
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
</div>
<div className="cardContainer">
  <div className="card">
    <img src={carImage} alt="Car" className="carImage" />
      <p className="carCapacity">6 passenger</p>
      <div className="carDetailsBottom">
        <p className="carName">innova</p>
        <p className="carPerKm">Rs.200/km</p>
     <div className="fareDetails">
      <p className="fare">carfare</p>
      <p className="bookNow">Book Now</p>
    </div>
    </div>
  </div>
</div>
    </>
  );
};

export default UserCarDisplay;
