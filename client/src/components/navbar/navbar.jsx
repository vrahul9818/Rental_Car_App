import "./navbar.css";
import React, { useState, useEffect } from "react";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img
          src='https://media.istockphoto.com/id/1290071290/vector/rental-car-icon.jpg?s=612x612&w=0&k=20&c=q4EsvU3jJJYbcZTJ1EzKh6c-Dvy39HagvAUgTCRK9bE='
          alt='Logo'
        />
      </div>
      {isLoggedIn && (
        <div className='navbar-buttons'>
          <button className='booking-button'>My Booking</button>
          <button className='logout-button' onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
