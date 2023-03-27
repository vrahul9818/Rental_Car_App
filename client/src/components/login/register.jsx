import React, { useState } from "react";
import carimage from "../../front_image/self-drive-norwa-car-people.png";
import "./login.css";
import UserSignup from "./usersignup";
import UserLogin from "./userLogin";
import Navbar from "../navbar/navbar";
import AdminLogin from "./adminlogin";
import AdminSignup from "./adminSignup";
import { Link, Navigate } from "react-router-dom";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Register = () => {
  localStorage.setItem("token","");
//   const [showSignup, setShowSignup] = useState(false);
//   const [showAdminSignup, setAdminShowSignup] = useState(false);
//   const handleAdminAccount = () => {
//     setAdminShowSignup(true);
//   };

//   const handleAdminBackAccount = () => {
//   setAdminShowSignup(false);
//   };
//   const handleCreateAccount = () => {
//     setShowSignup(true);
//   };
//   const handleBackToLogin = () => {
//     setShowSignup(false);
//   };

  // const handleAdminLogin =()=> {
  //   setShowSignup(true)
  // }
  // const handleUserLogin =()=> {
  //   setShowSignup(false)
  // }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

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
          {/* {showAdminSignup ? (
            <AdminSignup onBackToLogin={handleAdminBackAccount} />
          ) : (
            <AdminLogin onCreateAccount={handleAdminAccount} />
          )} */}

      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="User Login" {...a11yProps(0)} />
          <Tab label="User Register" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserLogin/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <UserSignup/>
      </TabPanel>
      
    </Box>

          {/* {showSignup ? (
            <UserSignup onBackToLogin={handleBackToLogin} />
          ) : (
            <UserLogin onCreateAccount={handleCreateAccount} />
          )} */}

          

        </div>
        <div className='userlogin'>
          
        </div>
      </div>
    </>
  );
};
export default Register;
