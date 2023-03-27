import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './userlogin.css'

const UserLogin = (props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:8080/car_rent/user/login";
  const handleSignin = () => {
    const obj = {
      Email: email,
      Password: password,
    };
    axios
      .post(url, obj)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/userBooking")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="userLoginBox">
        <h2>Sign in to user's account</h2>
        <div className="userlogin-input">
          <input
            type="email"
            placeholder="Email"
            name="Email"
            className="userlogin-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="userlogin-input">
          <input
            type="password"
            placeholder="Password"
            name="Password"
            className="userlogin-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="create-acc">
          <p>Forgot your password?</p>
          <p onClick={props.onCreateAccount} >
              Create an account
          </p>
        </div>
        
        <div className="signIN_creataccount">
        
          <button className="sign-btn" onClick={handleSignin}>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
