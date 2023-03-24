
import React, { useState } from "react";
import './MyBooking.css'

function MyBooking() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      carImage: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
      carName: "Toyota Corolla",
      carNumber: "AB-1234",
      origin: "New York City",
      destination: "Washington D.C.",
      startDate: "2022-01-01",
      endDate: "2022-01-05",
      bookingDate: "2022-01-01",
      bookingTime: "10:00 AM"
    },
    {
      id: 2,
      carImage: "https://images.unsplash.com/photo-1605270397189-b613ace3b4f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
      carName: "Honda Civic",
      carNumber: "CD-5678",
      origin: "Los Angeles",
      destination: "San Francisco",
      startDate: "2022-02-01",
      endDate: "2022-02-05",
      bookingDate: "2022-02-01",
      bookingTime: "2:00 PM"
    },

    {
        id: 3,
        carImage: "https://images.unsplash.com/photo-1625037669052-7e033716f325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        carName: "Toyota Corolla",
        carNumber: "AB-1234",
        origin: "New York City",
        destination: "Washington D.C.",
        startDate: "2022-01-01",
        endDate: "2022-01-05",
        bookingDate: "2022-01-01",
        bookingTime: "10:00 AM"
      },
    
  ]);

  const handleEdit = (bookingId) => {
    
  };

  const handleCancel = (bookingId) => {
    
  };

  return (
    <div className="previous-bookings-container">
      <h1>Previous bookings</h1>
      {bookings.map((booking) => (
        <div key={booking.id} className="booking-card">
          <img src={booking.carImage} alt={booking.carName} />
          <div className="details">
            <div className="car-details">
                <div className="car-name">{booking.carName}</div>
                <div className="car-number">{booking.carNumber}</div>
            </div>
            <div className="destination-details">
                <div className="origin-destination">Origin: {booking.origin}</div>
                <div className="destination">Destination: {booking.destination}</div>
                <div className="start-date">Start Date: {booking.startDate} </div>
                <div className="end-date">End Date: {booking.endDate}</div>
            </div>
            <div className="booking-details">
                <div className="booking-id">Booking ID: {booking.id}</div>
                <div className="booking-date">Booking date :{booking.bookingDate}</div>
                <div className="booking-time">Booking time: {booking.bookingTime}</div>
            </div>

            <div className="booking-actions">
                <button className="edit-button" onClick={() => handleEdit(booking.id)}>Edit</button>
                <button className="cancel-button" onClick={() => handleCancel(booking.id)}>Cancel</button>
          </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default MyBooking;
