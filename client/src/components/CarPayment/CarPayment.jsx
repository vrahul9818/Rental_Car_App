import React from 'react'
import { useContext } from 'react'
import { DataContext } from "../user_booking/user_data_context";
import { useEffect } from 'react';
import axios from 'axios';


const CarPayment = () => {

    const { startDate ,endDate,origin,destination, userCarID } = useContext(DataContext);
    const idddd = userCarID._id;
    const url = 'http://localhost:8080/car_rent/userCarDisplay/userCarBooking'

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .post(url, { 
            userCarIDS: idddd,
            startDate:startDate,
            endDate:endDate,
            origin:origin,
            destination:destination,
            bookingDate:new Date().toLocaleDateString(),
            bookingTime:new Date().toLocaleTimeString()
            
            }, { headers: { Authorization: `Bearer${token}` } })
            .then((response) => {
                console.log(response);
                // setData(response.data.carBookingData);
                // console.log(response.data.name);
                // setName(response.data.name);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <p>payment</p>
        </div>
    )
}

export default CarPayment;
