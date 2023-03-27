const mongoose = require("mongoose");
const AdminCarsData = new mongoose.Schema({
  carName: {
    type: String,
  },
  model: {
    type: String,
  },
  mileage: {
    type: String,
  },
  perKm: { type: Number },
  availableFrom: {
    type: String,
  },
  availableTo: {
    type: String,
  },
  description: {
    type: String,
  },

  images: {
    type: Array,
  },
  carDetails: {
    type: String,
  },
});

module.exports = mongoose.model("adminCarData", AdminCarsData);
