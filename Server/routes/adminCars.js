const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const { v4: uniqKeyGenerate } = require("uuid");
const AdminCarShema = require("../Schema/adminCars");
const path = require("path");
const PORT = 8081 || process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

router.post("/adminCarsData", (req, resp) => {
  const {
    carName,
    carType,
    model,
    mileage,
    perKm,
    availableFrom,
    availableTo,
    description,
    images,
    carDetails,
  } = req.body;
  console.log(req.body);
  resp.send(req.body);
  // const files = req.files.images;
  // const fragments = req.files.images[0].name.split(".");
  // const fileExt = fragments[fragments.length - 1];
  // const uniqKey = uniqKeyGenerate();
  // const fileName = uniqKey + "." + fileExt;
  // if (["jpeg", "jpg", "png", "svg", "PNG"].includes(fileExt)) {
  //   files.mv("../uploads/" + fileName, async (err) => {
  //     if (err) {
  //       resp.json({ message: err });
  //     } else {
  //       const AdminCar = new AdminCarShema({
  //         carName,
  //         carType,
  //         model,
  //         mileage,
  //         perKm,
  //         availableFrom,
  //         availableTo,
  //         description,
  //         images: fileName,
  //         carDetails,
  //       });
  //       try {
  //         await AdminCar.save();
  //         resp.json({
  //           message: "AdminCar data pushed into Database successfully",
  //         });
  //       } catch (e) {
  //         resp.json({ message: e });
  //       }
  //     }
  //   });
  // } else {
  //   resp.json({ message: "Please upload an image file" });
  // }
});
module.exports = router;
// app.use(express.urlencoded({ extended: true }));

// app.get("/all", async (req, resp) => {
//   try {
//     const response = await UsersShema.find();
//     console.log(response);
//     resp.json({ result: response });
//   } catch (e) {
//     resp.json({ message: e });
//   }
// });

// app.get("/image/:filename", (req, resp) => {
//   resp.sendFile(`/uploads/${req.params.filename}`, { root: "." });
// });
// app.use(express.static("/Client/build", { root: "." }));
// app.get("*", function (req, res) {
//   res.sendFile("/Client/build/index.html", { root: "." }, function (err) {
//     res.status(500).send(err);
//   });
// });
