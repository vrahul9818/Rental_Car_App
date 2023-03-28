import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../user_booking/user_data_context";
import { useEffect } from "react";
import axios from "axios";
import "./CarPayment.css";
const CarPayment = () => {
  const { startDate, endDate, origin, destination, userCarID } =
    useContext(DataContext);
  const idddd = userCarID._id;
  const url = "http://localhost:8080/car_rent/userCarDisplay/userCarBooking";
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        url,
        {
          userCarIDS: idddd,
          startDate: startDate,
          endDate: endDate,
          origin: origin,
          destination: destination,
          bookingDate: new Date().toLocaleDateString(),
          bookingTime: new Date().toLocaleTimeString(),
        },
        { headers: { Authorization: `Bearer${token}` } }
      )
      .then((response) => {
        setData(response.data);
        // setData(response.data.carBookingData);
        // console.log(response.data.name);
        // setName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data.images);

  return (
    <div id='CarPaymetDetails'>
      <div className='CarDetails'>
        <h2 className='detailsStageElements'>Car Details</h2>
        <div className='detailsStage'>
          <p className='detailsStageElements'>
            Car Name : &nbsp; {data.carName}
          </p>
          <p className='detailsStageElements'>
            Car Number : &nbsp; MH 15 TK 1919
          </p>

          <img
            className='carimage'
            src={url + `/images/${data?.images}`}
            alt=''
          />
        </div>
        <div className='detailsStage'>
          <p className='detailsStageElements'>Origin : &nbsp; {data.origin}</p>
          <p className='detailsStageElements'>
            Destination: {data.destination}
          </p>
          <p className='detailsStageElements'>
            Start Date :&nbsp; {data.startDate}
          </p>
          <p className='detailsStageElements'>End Date:&nbsp; {data.endDate}</p>
        </div>
        <div className='detailsStage'>
          <p className='detailsStageElements'>Booking Id:&nbsp; {data._id}</p>
          <p className='detailsStageElements'>
            Booking Date: &nbsp; {data.bookingDate}
          </p>
          <p className='detailsStageElements'>
            Booking Date: &nbsp; {data.bookingDate}
          </p>
          <p className='detailsStageElements'>
            Booking Time: &nbsp; {data.bookingTime}
          </p>
        </div>
        <div id='cancelButten'>CANCEL</div>
      </div>
      <div className='PaymentsDetails'>
        <h2 className='PaymentsDetailsElements'>Payment Details</h2>
        <p className='PaymentsDetailsElements'>Price Per KM : &nbsp; 25/Km</p>
        <p className='PaymentsDetailsElements'>Pricing: &nbsp; 3000 Rs</p>
        <p className='PaymentsDetailsElements'>Tax Charges: &nbsp; 50 Rs</p>
        <p className='PaymentsDetailsElements'>Total :&nbsp; 3050 Rs</p>
        <p className='PaymentsDetailsElements'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <button>PROCEED</button>
      </div>
    </div>
  );
};

export default CarPayment;
