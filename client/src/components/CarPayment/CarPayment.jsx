import React from 'react'
import { useContext } from 'react'
import { DataContext } from "../user_booking/user_data_context";
import { useEffect } from 'react';
import axios from 'axios';


const CarPayment = () => {

    const { startDate, endDate, origin, destination , userCarID, setUserCarID} = useContext(DataContext);
    console.log(userCarID)
    const url = 'http://localhost:8080/car_rent/userCarDisplay/userCarBooking'
    useEffect(() => {
        axios
      .get(url, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
        },
        body: {
            "userCarID": userCarID._id
        }
      })
      .then((response) => {
        console.log(response);
        // setData(response.data.carBookingData);
        // console.log(response.data.name);
        // setName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
      }, []);
  return (
    <div>

    </div>
  )
}

export default CarPayment