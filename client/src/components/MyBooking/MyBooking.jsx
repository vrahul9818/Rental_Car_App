import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./MyBooking.css";
import { DataContext } from "../user_booking/user_data_context";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";

function MyBooking() {
  const navigate = useNavigate();
  const url = "http://localhost:8080/car_rent/myBooking";
  const [bookings, setBookings] = useState([]);
  const { ubookingid, setuBookingid } = useContext(DataContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(url, { headers: { Authorization: `Bearer${token}` } })
      .then((response) => {
        console.log(response);
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = (bookingId) => {
    setuBookingid(bookingId);
    navigate("/editMybooking");
    console.log(ubookingid);
  };

  const handleCancel = (cancelId) => {
    console.log(cancelId);
    axios
      .delete("http://localhost:8080/car_rent/userBooking/Delete", {
        data: { cancelId: cancelId },
      })
      .then((response) => {
        console.log(response, "response axios");
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <div className='previous-bookings-container'>
        <h1>Previous bookings</h1>
        {bookings.map((booking) => (
          <div key={booking?._id} className='booking-card'>
            <img
              src={`http://localhost:8080/car_rent/myBooking/images/${booking.images}`}
              alt={booking?.carName}
            />
            <div className='details'>
              <div className='car-details'>
                <div className='car-name'>{booking?.carName}</div>
                <div className='car-number'>000000</div>
              </div>
              <div className='destination-details'>
                <div className='origin-destination'>
                  Origin: {booking?.origin}
                </div>
                <div className='destination'>
                  Destination: {booking?.destination}
                </div>
                <div className='start-date'>
                  Start Date:{" "}
                  {new Date(booking?.startDate).toLocaleDateString()}{" "}
                </div>
                <div className='end-date'>
                  End Date: {new Date(booking?.endDate).toLocaleDateString()}
                </div>
              </div>
              <div className='booking-details'>
                <div className='booking-id'>
                  Booking ID: {booking?._id.substring(4, 11)}
                </div>
                <div className='booking-date'>
                  Booking date :{booking?.bookingDate}
                </div>
                <div className='booking-time'>
                  Booking time: {booking?.bookingTime}
                </div>
              </div>
              <div className='booking-actions'>
                <button
                  className='edit-button'
                  onClick={() => handleEdit(booking?._id)}>
                  Edit
                </button>
                <button
                  className='cancel-button'
                  onClick={() => handleCancel(booking?._id)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyBooking;
