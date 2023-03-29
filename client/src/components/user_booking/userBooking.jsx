import React, { useContext } from "react";
import carimage from "../../front_image/self-drive-norwa-car-people.png";
import Navbar from "../navbar/navbar";
import { DataContext } from "./user_data_context";
import { useNavigate } from "react-router-dom";
import "./userBooking.css";

const UserBooking = () => {
  const navigate = useNavigate();
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    origin,
    setOrigin,
    destination,
    setDestination,
  } = useContext(DataContext);
  console.log(startDate);
  const handelcheck = () => {
    navigate("/userCarDisplay");
  };

  return (
    <>
      <Navbar />
      <div
        className='containerU'
        style={{
          backgroundImage: `url(${carimage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}>
        <div className='booking_dateU'>
          <p className='booking_headingU'>Enter Details Of Your Journey</p>
          <input
            className='StartDateU'
            placeholder='Start Date'
            type='date'
            name='startDate'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            className='EndDateU'
            placeholder='End Date'
            type='date'
            name='endDate'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <input
            className='originU'
            placeholder='origin'
            type='text'
            name='origin'
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <input
            className='destinationU'
            placeholder='destination'
            type='text'
            name='destination'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button onClick={handelcheck}>Check</button>
        </div>
      </div>
    </>
  );
};

export default UserBooking;
