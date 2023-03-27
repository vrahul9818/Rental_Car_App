const bodyParser = require("body-parser");
const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const app = express();
const router = express.Router();

//////schema import
const AdminCarModel = require("../Schema/adminCar");

//middleware
app.use(express.json());
app.use(cors());
app.use(fileupload());

router.get("/userCarDisplyData", async (req, res) => {
  try {
    // console.log(req.headers.authorization, "autherization");
    //const = req.headers.authorization.split("Bearer")[1];
    // console.log(token, "token");
    // const decoded = jwt.verify(token, SECRET_ID);
    // console.log(decoded.data, "decodedData");
    // const uniqueId = decoded.data.unique_id;
    // const name = decoded.data.Name;
    console.log(req.headers);
    const startDate = req.headers.startdate;
    const endDate = req.headers.enddate;
    console.log(startDate, endDate);

    const carBookingData = await AdminCarModel.find();
    //console.log(carBookingData);
    const fromDate = new Date(startDate);
    const toDate = new Date(endDate);

    const filteredCars = carBookingData.filter((car) => {
      const availableFromDate = new Date(car.availableFrom);
      const availableToDate = new Date(car.availableTo);
      return availableFromDate >= fromDate && availableToDate <= toDate;
    });
    console.log(filteredCars);
    res.status(201).send(filteredCars);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching data");
  }
});
router.get("/userCarDisplyData/images/:filename", async (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", `/imageUpload/${req.params.filename}`)
  );
});

module.exports = router;
