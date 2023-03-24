import React, { useState } from "react";
import axios from "axios";

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
        <input
          type="text"
          placeholder="Name"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign up</button>
      </div>
    </div>
  );
};

export default AdminSignup;
