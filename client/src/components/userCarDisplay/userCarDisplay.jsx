import React, { useContext, useState } from "react";
import { DataContext } from "../user_booking/user_data_context";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./userCarDisplay.css";
import axios from "axios";
import { useEffect } from "react";

const UserCarDisplay = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { startDate, endDate, origin, destination , userCarID, setUserCarID} = useContext(DataContext);
  const navigate = useNavigate();
  const [userCarData, setUserCarData] = useState([]);
  console.log(userCarID)
  const handleModify = () => {
    navigate("/userBooking");
  };
  const url = "http://localhost:8080/car_rent/userCarDisplyData";
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          startDate: startDate,
          endDate: endDate,
        },
      })
      .then((response) => {
        setUserCarData(response.data);

        // setData(response.data.carBookingData);
        // console.log(response.data.name);
        // setName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(userCarData);
  const handelUserBooking = (key) => {
    setUserCarID(key)

    navigate("/carpayment");
    
  };
  return (
    <>
      <Navbar />
      <div className='second_bar'>
        <p className='origin'>{origin}</p>
        <p className='destination'>{destination}</p>
        <p className='startDate'>{startDate}</p>
        <p className='endDate'>{endDate}</p>
        <button className='modify' onClick={handleModify}>
          Modify
        </button>
      </div>
      <div className='third_bar'>
        <div className='carTypeContainer'>
          <p
            className='carTypeText'
            onClick={() => setShowDropdown(!showDropdown)}>
            Car Type{" "}
          </p>
          {showDropdown && (
            <div className='carTypeDropdown'>
              <select id='carType' on>
                <option value='XUV'>XUV</option>
                <option value='UV'>UV</option>
                <option value='all'>All</option>
              </select>
            </div>
          )}
        </div>
        <p className='Seating'>Seating</p>
        <p className='Milage'>Milage</p>
        <p className='Other'>Other</p>
      </div>
      <div class='cardContainer'>
        {userCarData?.map((key, index) => {
          return (
            <>
              <div class='card'>
                <img
                  className='car_image'
                  src={url + `/images/${key?.images[0]}`}
                  alt='image'
                />
                <div class='carDetailsTop'>
                  <p class='carCapacity'>6 passenger</p>
                  <div className='car_name_fare'>
                    <p class='carName'>{key?.carName}</p>
                    <p class='carPerKm'>{key?.perKm}</p>
                  </div>
                </div>
                <div class='carDetailsBottom'>
                  <p class='fare'>carfare</p>
                  <p class='bookNow' onClick={()=>{handelUserBooking(key)}}>
                    Book Now
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserCarDisplay;
