const bodyParser = require("body-parser");
const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SECRET_ID = "j";
const jwt = require("jsonwebtoken");

const app = express();

const router = express.Router();

//schema import
const AdminCarModel = require("../Schema/adminCar");
const UserModel = require("../Schema/user")


//middleware
app.use(express.json());
app.use(cors());
app.use(fileupload());
app.use(bodyParser.json())


router.get("/myBooking", async (req, res) => {

    try {
      const token = req.headers.authorization.split("Bearer")[1];
      const decoded = jwt.verify(token, SECRET_ID);
     
      const User_data = await UserModel.findOne({_id: decoded.data.unique_id });
      
      console.log(User_data.Booking)
      const obj = [];
      for(let i = 0 ; i < User_data.Booking.length;i++ ){
        const carsDetail = await AdminCarModel.findOne({_id: User_data.Booking[i]});
        console.log(carsDetail);
        obj.push(carsDetail);
      }
        res.send(obj);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error fetching data");
    }
  });




  module.exports = router