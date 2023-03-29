import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import './MyBooking.css'



function MyBooking() {

  const url = "http://localhost:8080/car_rent/myBooking";
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
        .get(url,
          { headers: { Authorization: `Bearer${token}` } })
        .then((response) => {
            console.log(response);
            setBookings(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
}, []);


  const handleEdit = (bookingId) => {
    
  };

  const handleCancel = (bookingId) => {
      
  
  };

  return (
    <div className="previous-bookings-container">
      <h1>Previous bookings</h1>
      {bookings.map((booking) => (
        <div key={booking?._id} className="booking-card">
          <img src={booking?.images} alt={booking?.carName} />
          <div className="details">
            <div className="car-details">
                <div className="car-name">{booking?.carName}</div>
                <div className="car-number">000000</div>
            </div>
            <div className="destination-details">
                <div className="origin-destination">Origin: {booking?.origin}</div>
                <div className="destination">Destination: {booking?.destination}</div>
                <div className="start-date">Start Date: {new Date(booking?.startDate).toLocaleDateString()} </div>
                <div className="end-date">End Date: {new Date(booking?.endDate).toLocaleDateString()}</div>
            </div>
            <div className="booking-details">
                <div className="booking-id">Booking ID: {booking?._id.substring(4, 11)}</div>
                <div className="booking-date">Booking date :{booking?.bookingDate}</div>
                <div className="booking-time">Booking time: {booking.bookingTime}</div>
            </div>

            <div className="booking-actions">
                <button className="edit-button" onClick={() => handleEdit(booking._id)}>Edit</button>
                <button className="cancel-button" onClick={handleCancel(booking?._id)}>Cancel</button>
          </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default MyBooking;
