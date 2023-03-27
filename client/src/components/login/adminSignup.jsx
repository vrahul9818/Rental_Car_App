import React, { useState } from "react";
import axios from "axios";
import './adminsignup.css'

const AdminSignup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
   
    if (password&&(password === confirmPassword)){
        const obj = {
            Name:name,
            Email:email,
            Password:password,
        }
        const url = "http://localhost:8080/car_rent/admin/signup";
        axios.post(url, obj)
        .then(response => {
            console.log(response);
            props.onBackToLogin();
        
      })
      .catch((error) => {
        console.log(error);
      });

    }
  };

  return (
    <div className="adminSignup">
      <div className="adminSignupBox">
        <h2>Sign up for an admin account</h2>
        <div className="admin-input">
          <input
            type="text"
            placeholder="Name"
            name="Name"
            className="adminsignup-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="admin-input">
          <input
            type="email"
            placeholder="Email"
            name="Email"
            className="adminsignup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="admin-input">
          <input
            type="password"
            placeholder="Password"
            className="adminsignup-password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="admin-input">
          <input
            type="password"
            placeholder="Confirm Password"
            name="Confirm Password"
            className="adminsignup-confirmpassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        
        <button className="signup-btn" onClick={handleSignup}>Sign up</button>
      </div>
    </div>
  );
};

export default AdminSignup;
