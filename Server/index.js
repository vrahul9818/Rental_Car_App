const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//files imported 
const userLoginSignup = require("./routes/signup_login_user")

const app = express();


//port
const SERVER_PORT = process.env.PORT||8080 ;
const DB = "mongodb+srv://CarRental:CarRental@carrental.q7afrjf.mongodb.net/?retryWrites=true&w=majority";

//middle ware
app.use(bodyParser.json());
app.use(cors());

//connections 
mongoose.connect(DB).then(()=>{console.log("connected to mongoose atlas")}).catch((err)=>{console.log(err,"no connection")});


//routes
app.use("/car_rent",userLoginSignup);


//server
app.listen(SERVER_PORT, (req,res)=>{
    console.log(`server started ${SERVER_PORT}`);
})

