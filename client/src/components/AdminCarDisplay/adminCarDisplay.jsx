import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminCarDisplay = () => {
  console.log(localStorage.getItem("token_admin"));
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const url = "http://localhost:8080/car_rent/adminCarData";
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token_admin")}`,
        },
      })
      .then((response) => {
        console.log(response.data.carBookingData);
        setData(response.data.carBookingData);
        console.log(response.data.name);
        setName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data, "data");
  return (
    <>
      <h1>i am at admin car detail</h1>
      <p>Name: {name}</p>
      {}
    </>
  );
};

export default AdminCarDisplay;

