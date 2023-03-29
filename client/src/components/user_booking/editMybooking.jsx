import React, { useState,useCallback } from "react";
import { useContext } from "react";
import { DataContext } from "./user_data_context";
import { useEffect } from "react";
import axios from "axios";

// import "./CarPayment.css";

const EditMYbooking = () => {


  const { ubookingid } = useContext(DataContext);
  const bookinEditid = ubookingid;



console.log(bookinEditid,"iddd")
useEffect(() => {
    axios
      .get("http://localhost:8080/car_rent/bookedit/edit",{editId: bookinEditid})
      .then((response) => {
       console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
return(<>hi</>)
}


export default EditMYbooking;
