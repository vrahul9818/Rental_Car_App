const express = require("express");
const fileupload = require("express-fileupload");
const cors = require('cors')
const path = require("path");
const mongoose = require("mongoose");

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
    const { carName,carType,model,mileage,perKm,availableFrom,availableTo,description,carDetails} = req.body;
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
    });
    console.log(adminCar.images);
});

module.exports = router;