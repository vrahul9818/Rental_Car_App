import React, { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const[origin,setOrigin] = useState("");
  const[destination,setDestination] = useState("");
  const[userCarID, setUserCarID] = useState("");

  return (
    <DataContext.Provider value={{ startDate, setStartDate ,endDate,setEndDate,origin,setOrigin,destination,setDestination, userCarID, setUserCarID}}>
      {props.children}
    </DataContext.Provider>
  );
};
