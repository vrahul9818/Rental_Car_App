const bodyParser = require("body-parser");
const express = require("express");
const fileupload = require("express-fileupload");
const cors = require('cors')
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const SECRET_ID = "j";
const jwt = require('jsonwebtoken');

const app = express();
const router = express.Router();


//////schema import
const AdminCarModel = require("../Schema/adminCar");


//middleware
app.use(express.json());
app.use(cors());
app.use(fileupload())



router.post("/adminCarData", async(req, res) => {
    const {images} =req.files;
    const { carName,carType,model,mileage,perKm,availableFrom,availableTo,description,carDetails,adminToken} = req.body;
    console.log(images)
    var imageArray = [];

    if (typeof images === 'object' && !Array.isArray(images)) {
        try {
            await images.mv("./imageUpload/" + images.name);
            imageArray.push(images.name);
        } catch (err) {
            console.log(err);
            res.send("error");
        }
    } else {
        for (let key in images) {
            const image = images[key];
            if (image && image.mv) {
                try {
                    await image.mv("./imageUpload/" + image.name);
                    imageArray.push(image.name);
                } catch (err) {
                    console.log(err);
                    res.send(err);
                }
            }
        }
    }
    
/////decoding token///////////
const decoded = jwt.verify(req.body.adminToken, SECRET_ID);
// console.log(decoded.data,"decoded");


//////unique id for admin///////
    const adminCar = await AdminCarModel.create({
        carName: carName,
        carType:carType,
        model: model,
        mileage: mileage,
        perKm:perKm,
        availableFrom: availableFrom,
        availableTo:availableTo,
        description: description,
        images: imageArray ,
        carDetails: carDetails,
        Admin_id: decoded.data.unique_id
    });
});

module.exports = router;