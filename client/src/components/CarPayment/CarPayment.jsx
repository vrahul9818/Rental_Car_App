// import React, { useState } from "react";
// import { useContext } from "react";
// import { DataContext } from "../user_booking/user_data_context";
// import { useEffect } from "react";
// import axios from "axios";
// import "./CarPayment.css";
// import Navbar from "../navbar/navbar";

// const CarPayment = () => {
//   const { startDate, endDate, origin, destination, userCarID } =
//     useContext(DataContext);
//   const idddd = userCarID._id;
//   const url = "http://localhost:8080/car_rent/userCarDisplay/userCarBooking";
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     axios
//       .post(
//         url,
//         {
//           userCarIDS: idddd,
//           startDate: startDate,
//           endDate: endDate,
//           origin: origin,
//           destination: destination,
//           bookingDate: new Date().toLocaleDateString(),
//           bookingTime: new Date().toLocaleTimeString(),
//         },
//         { headers: { Authorization: `Bearer${token}` } }
//       )
//       .then((response) => {
//         setData(response.data);
//         // setData(response.data.carBookingData);
//         // console.log(response.data.name);
//         // setName(response.data.name);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   console.log(data.images);

//   return (
//     <div>
//       <Navbar />
//       <div id='CarPaymetDetails'>
//         <div className='CarDetails'>
//           <h2 className='detailsStageElements'>Car Details</h2>
//           <div className='detailsStage imageFlex'>
//             <div>
//               <p className='detailsStageElements'>
//                 Car Name : &nbsp; {data.carName}
//               </p>
//               <p className='detailsStageElements'>
//                 Car Number : &nbsp; MH 15 TK 1919
//               </p>
//             </div>
//             <div>
//               <img
//                 className='carimage'
//                 src={url + `/images/${data?.images}`}
//                 alt=''
//               />
//             </div>
//           </div>
//           <div className='detailsStage'>
//             <p className='detailsStageElements'>
//               Origin : &nbsp; {data.origin}
//             </p>
//             <p className='detailsStageElements'>
//               Destination: {data.destination}
//             </p>
//             <p className='detailsStageElements'>
//               Start Date :&nbsp; {new Date(data?.startDate).toLocaleDateString()}
//             </p>
//             <p className='detailsStageElements'>
//               End Date:&nbsp; {new Date(data?.endDate).toLocaleDateString()}
//             </p>
//           </div>
//           <div className='detailsStage'>
//             <p className='detailsStageElements'>Booking Id:&nbsp; {data._id}</p>
//             <p className='detailsStageElements'>
//               Booking Date: &nbsp; {data.bookingDate}
//             </p>
//             <p className='detailsStageElements'>
//               Booking Time: &nbsp; {data.bookingTime}
//             </p>
//           </div>
//           <button className='cancelButton'>CANCEL</button>
//         </div>
//         <div className='PaymentsDetails'>
//           <h2 className='PaymentsDetailsElements'>Payment Details</h2>
//           <p className='PaymentsDetailsElements'>Price Per KM : &nbsp; 25/Km</p>
//           <p className='PaymentsDetailsElements'>Pricing: &nbsp; 3000 Rs</p>
//           <p className='PaymentsDetailsElements'>Tax Charges: &nbsp; 50 Rs</p>
//           <p className='PaymentsDetailsElements'>Total :&nbsp; 3050 Rs</p>
//           <p className='PaymentsDetailsElements'>
//             Lorem ipsum dolor sit amet consectetur.
//           </p>
//           <button>PROCEED</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarPayment;


import React, { useState,useCallback } from "react";
import { useContext } from "react";
import { DataContext } from "../user_booking/user_data_context";
import { useEffect } from "react";
import axios from "axios";
import useRazorpay from "react-razorpay";
import "./CarPayment.css";

const CarPayment = () => {

  const Razorpay = useRazorpay();
  const RazorPayDisp = useCallback(async(total) => {
    const options = {
      key: "rzp_test_dYfvheZpx3IoPD", 
      amount: `${total}`,
      currency: "INR",
      name: "CAR RENTAL",
      description: "Test Transaction",
      handler: function (res) {
        console.log(res)
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
  },[Razorpay])



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
        <button className='cancelButton'>CANCEL</button>
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
        <button onClick={()=>{RazorPayDisp(`${300000}`)}}  >PROCEED</button>
      </div>
    </div>
  );
};



export default CarPayment;