import React, { useState, useCallback } from "react";
import { useContext } from "react";
import { DataContext } from "../user_booking/user_data_context";
import { useEffect } from "react";
import axios from "axios";
import useRazorpay from "react-razorpay";
import "./CarPayment.css";
import Navbar from "../navbar/navbar";
const CarPayment = () => {
  const Razorpay = useRazorpay();
  const RazorPayDisp = useCallback(
    async (total) => {
      const options = {
        key: "rzp_test_dYfvheZpx3IoPD",
        amount: `${total}`,
        currency: "INR",
        name: "CAR RENTAL",
        description: "Test Transaction",
        handler: function (res) {
          console.log(res);
        },
        prefill: {
          name: "Rahul Verma",
          email: "vrahul9818@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new Razorpay(options);
      rzp1.open();
    },
    [Razorpay]
  );

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
    <>
      {" "}
      <Navbar />
      <div id='CarPaymetDetails'>
        <div className='CarDetails'>
          <h1 className='detailsStageElements boxheading'>Car Details</h1>
          <div className='detailsStage imageFlex'>
            <div>
              <p className='detailsStageElements'>
                Car Name : &nbsp; {data.carName}
              </p>
              <p className='detailsStageElements'>
                Car Number : &nbsp; MH 15 TK 1919
              </p>
            </div>
            <div>
              <img
                className='carimage'
                src={url + `/images/${data?.images}`}
                alt=''
              />
            </div>
          </div>
          <div className='detailsStage mapFlex'>
            <div>
              <p className='detailsStageElements'>
                Origin : &nbsp; {data.origin}
              </p>
              <p className='detailsStageElements'>
                Destination: {data.destination}
              </p>
              <p className='detailsStageElements'>
                Start Date :&nbsp;
                {new Date(data?.startDate).toLocaleDateString()}
              </p>
              <p className='detailsStageElements'>
                End Date:&nbsp; {new Date(data?.endDate).toLocaleDateString()}
              </p>
            </div>
            <div className='mapWindow'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d14948530.501487413!2d75.20105!3d23.834824!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!3m2!1d19.0759837!2d72.8776559!4m5!1s0x390cfd1a88dcc559%3A0x24fa43c081dbe51!2sChandni%20Chowk%2C%20New%20Delhi%2C%20Delhi!3m2!1d28.650533099999997!2d77.23033699999999!5e0!3m2!1sen!2sin!4v1680101951118!5m2!1sen!2sin'
                width='200'
                height='150'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'></iframe>
            </div>
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
          <button className='cancelButton'>CANCEL</button>
        </div>
        <div className='PaymentsDetails'>
          <h1 className='PaymentsDetailsElements boxheading'>
            Payment Details
          </h1>
          <p className='PaymentsDetailsElements'>Price Per KM : &nbsp; 25/Km</p>
          <p className='PaymentsDetailsElements'>Pricing: &nbsp; 3000 Rs</p>
          <p className='PaymentsDetailsElements'>Tax Charges: &nbsp; 50 Rs</p>
          <p className='PaymentsDetailsElements'>Total :&nbsp; 3050 Rs</p>
          <p className='PaymentsDetailsElements'>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button
            onClick={() => {
              RazorPayDisp(`${300000}`);
            }}>
            PROCEED
          </button>
        </div>
      </div>
    </>
  );
};

export default CarPayment;
