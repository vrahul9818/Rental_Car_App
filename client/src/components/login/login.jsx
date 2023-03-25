import React, { useState } from "react";
import carimage from "../../front_image/self-drive-norwa-car-people.png";
import "./login.css";
import UserSignup from "./usersignup";
import UserLogin from "./userLogin";
import Navbar from "../navbar/navbar";
import AdminLogin from "./adminlogin";
import AdminSignup from "./adminSignup";

const Login = () => {
  localStorage.setItem("token","");
  localStorage.setItem("token_admin","");
  const [showSignup, setShowSignup] = useState(false);
  const [showAdminSignup, setAdminShowSignup] = useState(false);
  const handleAdminAccount = () => {
    setAdminShowSignup(true);
  };

const handleAdminBackAccount = () => {
  setAdminShowSignup(false);
  };
  const handleCreateAccount = () => {
    setShowSignup(true);
  };
  const handleBackToLogin = () => {
    setShowSignup(false);
  };
  return (
    <>
      <Navbar />
      <div
        className='container'
        style={{
          backgroundImage: `url(${carimage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}>
        <div className='adminlogin'>
          {showAdminSignup ? (
            < AdminSignup onBackToLogin={handleAdminBackAccount} />
          ) : (
            <AdminLogin onCreateAccount={handleAdminAccount} />
          )}
        </div>
        <div className='userlogin'>
          {showSignup ? (
            <UserSignup onBackToLogin={handleBackToLogin} />
          ) : (
            <UserLogin onCreateAccount={handleCreateAccount} />
          )}
        </div>
      </div>
    </>
  );
};
export default Login;
