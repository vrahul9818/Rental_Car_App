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
const BookingModel = require("../Schema/booking");


//middleware
app.use(express.json());
app.use(cors());
app.use(fileupload());
app.use(bodyParser.json());


router.get("/myBooking", async (req, res) => {
  console.log(req.headers.authorization);

  try {
    const token = req.headers.authorization.split("Bearer")[1];
    const decoded = jwt.verify(token, SECRET_ID);
    console.log(decoded);
    const User_data = await UserModel.findOne({_id: decoded.data.unique_id });
    console.log(User_data);
    const carsDetail = await BookingModel.find({User_id: decoded.data.unique_id});
    res.status(200).send(carsDetail);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching data");
  }
});


module.exports = router;
