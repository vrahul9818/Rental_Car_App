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
        <div key={booking?.id} className="booking-card">
          <img src={booking?.carImage} alt={booking?.carName} />
          <div className="details">
            <div className="car-details">
                <div className="car-name">{booking?.carName}</div>
                <div className="car-number">000000</div>
            </div>
            <div className="destination-details">
                <div className="origin-destination">Origin: {booking?.origin}</div>
                <div className="destination">Destination: {booking?.destination}</div>
                <div className="start-date">Start Date: {booking?.startDate} </div>
                <div className="end-date">End Date: {booking?.endDate}</div>
            </div>
            <div className="booking-details">
                <div className="booking-id">Booking ID: {booking?.id}</div>
                <div className="booking-date">Booking date :{booking?.bookingDate}</div>
                <div className="booking-time">Booking time: {booking.bookingTime}</div>
            </div>

            <div className="booking-actions">
                <button className="edit-button" onClick={() => handleEdit(booking.id)}>Edit</button>
                <button className="cancel-button" onClick={() => handleCancel(booking?.id)}>Cancel</button>
          </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default MyBooking;
