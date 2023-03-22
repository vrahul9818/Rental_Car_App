import React, { useState } from "react";
import carimage from "../../front_image/self-drive-norwa-car-people.png";
import "./login.css";
import UserSignup from "./usersignup";
import UserLogin from "./userLogin";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const handleCreateAccount = () => {
    setShowSignup(true);
  };
  const handleBackToLogin = () => {
    setShowSignup(false);
  };
  return (
    <>
      <div className="navbar" style={{ height: "80px" }}>{}</div>
      <div
        className="container"
        style={{
          backgroundImage: `url(${carimage})`,
          backgroundSize: "cover",
          minHeight: "100vh"
        }}
      >
        <div className="admin_login">
        
        </div>

        <div className="userlogin"> 
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
