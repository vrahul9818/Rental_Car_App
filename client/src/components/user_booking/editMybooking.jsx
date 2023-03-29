import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./user_data_context";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
// import "./CarPayment.css";

const EditMYbooking = () => {
  const { ubookingid } = useContext(DataContext);
  const bookinEditid = ubookingid;
  const [editdata, setEditData] = useState([]);
  const [newStartdate, setnewStartdate] = useState("");
  const [newEndtdate, setnewEnddate] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/car_rent/myBooking/editdataDisplay?unique_key=${ubookingid}`
      )
      .then((response) => {
        setEditData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ubookingid]);

  const handelUserEdit = () => {
    editdata.startDate = newStartdate;
    editdata.endDate = newEndtdate;

    axios
      .put("http://localhost:8080/car_rent/userId/Editdata", editdata)
      .then((response) => {
        console.log(response.data, "response axios");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/mybooking");
  };

  return (
    <>
      <Navbar />
      <div id='CarPaymetDetails'>
        <div className='CarDetails'>
          <h2 className='detailsStageElements'>Car Details</h2>
          <div className='detailsStage'>
            <p className='detailsStageElements'>
              Car Name : &nbsp; {editdata.carName}
            </p>
            <p className='detailsStageElements'>
              Car Number : &nbsp; MH 15 TK 1919
            </p>
            {/* 
        <img
          className='carimage'
          src={url + `/images/${data?.images}`}
          alt=''
        /> */}
          </div>
          <div className='detailsStage'>
            <p className='detailsStageElements'>
              Origin : &nbsp; {editdata.origin}
            </p>
            <p className='detailsStageElements'>
              Destination: {editdata.destination}
            </p>
            <label htmlFor='startDate'>StartDATE</label>
            <input
              onChange={(e) => {
                setnewStartdate(e.target.value);
              }}
              type='date'
              id='startDate'
              value={newStartdate}
            />
            <label htmlFor='startDate'>EndDATE</label>
            <input
              onChange={(e) => {
                setnewEnddate(e.target.value);
              }}
              type='date'
              id='startDate'
              value={newEndtdate}
            />
          </div>
          <div className='detailsStage'>
            <p className='detailsStageElements'>
              Booking Id:&nbsp; {editdata._id}
            </p>
            <p className='detailsStageElements'>
              Booking Date: &nbsp; {editdata.bookingDate}
            </p>
            <p className='detailsStageElements'>
              Booking Date: &nbsp; {editdata.bookingDate}
            </p>
            <p className='detailsStageElements'>
              Booking Time: &nbsp; {editdata.bookingTime}
            </p>
          </div>
          <button onClick={handelUserEdit} id='cancelButten'>
            Save
          </button>
        </div>
        <div className='PaymentsDetails'>
          <h2 className='PaymentsDetailsElements'>Payment Details</h2>
          <p className='PaymentsDetailsElements'>Price Per KM : &nbsp; 25/Km</p>
          <p className='PaymentsDetailsElements'>Pricing: &nbsp; 3000 Rs</p>
          <p className='PaymentsDetailsElements'>Tax Charges: &nbsp; 50 Rs</p>
          <p className='PaymentsDetailsElements'>Total :&nbsp; 3050 Rs</p>
          <p className='PaymentsDetailsElementsalreadydone'>
            Payment Already Done
          </p>
          <p className='PaymentsDetailsElements'></p>
        </div>
      </div>
    </>
  );
};

export default EditMYbooking;
