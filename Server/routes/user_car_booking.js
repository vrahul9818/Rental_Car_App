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
const UserModel = require("../Schema/user")

//middleware
app.use(express.json());
app.use(cors());
app.use(fileupload());



router.get("/userCarDisplay/userCarBooking", async (req, res) => {

    try {
        const userCarIDS = req.body;
        console.log(userCarIDS);
      const token = req.headers.authorization.split("Bearer")[1];
      const decoded = jwt.verify(token, SECRET_ID);
      const User_data = await UserModel.findOne({_id: decoded.data.unique_id });
         userCarIDS.userCarID.forEach((key)=>{
         User_data.Booking.push(key);
        })
        console.log(User_data)
        await User_data.save()
        res.send("user_data");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error fetching data");
    }
  });


  module.exports = router