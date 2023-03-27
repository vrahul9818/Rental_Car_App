import React from "react";
import { useContext, useState } from "react";
import { adminCarDataContext } from "../adminCarContext/adminCarContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./adminCarEditDelete.css"

const AdminCarEditDelete = () => { 
  const {adminCarData} = useContext(adminCarDataContext);
  const navigate = useNavigate();
  const [uid,setUid] = useState(adminCarData._id)
  const [carName, setCarName] = useState(adminCarData.carName);
  const [carType, setCarType] = useState(adminCarData.carType);
  const [model, setModel] = useState(adminCarData.model);
  const [mileage, setMileage] = useState(adminCarData.mileage);
  const [perKm, setPerKm] = useState(adminCarData.perKm);
  const [availableFrom, setAvailableFrom] = useState(adminCarData.availableFrom);
  const [availableTo, setAvailableTo] = useState(adminCarData.availableTo);
  const [description, setDescription] = useState(adminCarData.description);

  const [carDetails, setCarDetails] = useState("");
  const url = "http://localhost:8080/car_rent/adminCarData/Edit";
  const handleSubmit = (e) => {
   
    e.preventDefault();
    const formData = new FormData();
    formData.append("uid",uid)
    formData.append("carName", carName);
    formData.append("carType", carType);
    formData.append("model", model);
    formData.append("mileage", mileage);
    formData.append("perKm", perKm);
    formData.append("availableFrom", availableFrom);
    formData.append("availableTo", availableTo);
    formData.append("description", description);
    formData.append("carDetails", carDetails);
    console.log(formData);
    axios
      .put(url, formData)
      .then((response) => {
        console.log(response.data,"response axios");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formData);
    navigate("/AdminCarDisplay");

  };

  const handelDelete = () => {
    console.log(uid)
    axios
      .delete("http://localhost:8080/car_rent/adminCarData/Delete", { data: { uid: uid } })
      .then((response) => {
        console.log(response.data, "response axios");
        navigate("/AdminCarDisplay");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="AdminCarDisplay">
      <h2>Add Car Edit Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='car-name'>Car Name:</label>
        <input
          type='text'
          id='car-name'
          name='carName'
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
        />
        <label htmlFor='car-type'>Car Type:</label>
        <select
          id='car-type'
          name='carType'
          value={carType}
          onChange={(e) => setCarType(e.target.value)}>
          <option value=''>Select Car Type</option>
          <option value='Sedan'>Sedan</option>
          <option value='SUV'>SUV</option>
          <option value='Hatchback'>Hatchback</option>
        </select>
        <label htmlFor='model'>Model:</label>
        <select
          id='model'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}>
          <option value=''> --Select--</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
        </select>
        <label>Mileage:</label>
        <select value={mileage} onChange={(e) => setMileage(e.target.value)}>
          <option value=''>--Select--</option>
          <option value='less than 10 kmpl'>Less than 10 kmpl</option>
          <option value='10-15 kmpl'>10-15 kmpl</option>
          <option value='15-20 kmpl'>15-20 kmpl</option>
          <option value='more than 20 kmpl'>More than 20 kmpl</option>
        </select>
        <label htmlFor='per-km'>Per Km:</label>
        <input
          type='number'
          id='per-km'
          name='perKm'
          value={perKm}
          onChange={(e) => setPerKm(e.target.value)}
        />
        <label htmlFor='available-from'>Available From:</label>
        <input
          type='date'
          id='available-from'
          name='availableFrom'
          value={availableFrom}
          onChange={(e) => setAvailableFrom(e.target.value)}
        />
        <label htmlFor='available-to'>Available To:</label>
        <input
          type='date'
          id='available-to'
          name='availableTo'
          value={availableTo}
          onChange={(e) => setAvailableTo(e.target.value)}
        />
        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <label htmlFor='car-details'>Car Details:</label>
        <textarea
          id='car-details'
          name='carDetails'
          value={carDetails}
          onChange={(e) => setCarDetails(e.target.value)}></textarea>
        <button id="adminCarEditADD" className="adminCarEditADDcl" type='submit'>Edit</button>
      </form>
      <button onClick={handelDelete} id="adminCarEditDelete" type="delete">Delete</button>
    </div>
  );
};


export default AdminCarEditDelete;