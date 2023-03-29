import React, { useState } from "react";
import axios from "axios";
import "./usersignup.css";
import { useNavigate } from "react-router-dom";

const UserSignup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password && password === confirmPassword) {
      const obj = {
        Name: name,
        Email: email,
        Contact: contact,
        Password: password,
      };
      const url = "http://localhost:8080/car_rent/user/signup";
      axios
        .post(url, obj)
        .then((response) => {
          console.log(response);
          props.onBackToLogin();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    navigate("/register");
  };

  return (
    <div className='userSignup'>
      <div className='userSignupBox'>
        <h2>Sign up for an account</h2>
        <div className='userSignup-input'>
          <input
            type='text'
            placeholder='Name'
            name='Name'
            className='userSignup-name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='userSignup-input'>
          <input
            type='email'
            placeholder='Email'
            name='Email'
            className='userSignup-email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='userSignup-input'>
          <input
            type='tel'
            placeholder='Contact'
            name='Contact'
            className='userSignup-contact'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className='userSignup-input'>
          <input
            type='password'
            placeholder='Password'
            name='Password'
            className='userSignup-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='userSignup-input'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='Confirm Password'
            className='userSignup-password2'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className='sign-btn' onClick={handleSignup}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default UserSignup;
