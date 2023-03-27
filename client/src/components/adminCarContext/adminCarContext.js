import React, { useState } from "react";
import { createContext } from "react";

export const adminCarDataContext = createContext();

export const AdminCarDataProvider = (props) => {
  const [adminCarData, setadminCarData] = useState("");

  return (
    <adminCarDataContext.Provider value={{ adminCarData, setadminCarData }}>
      {props.children}
    </adminCarDataContext.Provider>
  );
};
