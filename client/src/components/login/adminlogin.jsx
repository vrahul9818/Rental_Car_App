import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './adminlogin.css'

const AdminLogin = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:8080/car_rent/admin/login";
  const handleSignin = () => {
    const obj = {
      Email: email,
      Password: password,
    };
    axios
      .post(url, obj)
      .then((response) => {
       localStorage.setItem("token_admin", response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/AdminForm");
  };

  return (
    <>
      <div className='adminLoginBox'>
        <h2>Sign in to admin account</h2>
        <div className="form-input">
          <input
            type='email'
            placeholder='Email'
            name='Email'
            className="admin-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input">
          <input
            type='password'
            placeholder='Password'
            name='Password'
            className="admin-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className='signIn_createaccount'>
          <p onClick={props.onCreateAccount} className='create-admin-account'>
            Register admin account
          </p>
          <button className="admin-sign" onClick={handleSignin}>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
