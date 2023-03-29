import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./admincarDisplay.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/adminNavbar";
import { adminCarDataContext } from "../adminCarContext/adminCarContext";

const AdminCarDisplay = () => {
  const { adminCarData, setadminCarData } = useContext(adminCarDataContext);

  const navigate = useNavigate();
  console.log(localStorage.getItem("token_admin"));
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const handelonclick = () => {
    navigate("/AdminForm");
  };

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

  /////edit admin car detail///
  const adminCarDisplayEditDelete = (key) => {
    console.log(key);
    setadminCarData(key);
    navigate("/adminCarEditDelete");
  };

  ////// checking to convert to alphabetic month name
  const dateToNumeric = (val) => {
    const dateStr = val;
    const date = new Date(dateStr);
    const options = { day: "numeric", month: "long" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  // console.log(data[0].availableFrom, "date");

  return (
    <div>
      <div className='adminNavbar'>{<Navbar />}</div>
      <div className='adminCarcontainer'>
        <div className='hello_admin_name'>
          <h1 className='Admin_name'>{`Hello ${name}`}</h1>
        </div>

        <div className='car_add_CarButton'>
          <h3 className='car_name'>Car</h3>
          <button onClick={handelonclick} className='addCar'>
            ADD CAR
          </button>
        </div>
        <div className='admin_car_card'>
          {data.map((key, index) => {
            return (
              <>
                <section className='car_card'>
                  <img
                    onDoubleClick={() => {
                      adminCarDisplayEditDelete(key);
                    }}
                    className='car_image'
                    src={url + `/images/${key?.images[0]}`}
                    alt='image'
                  />
                  <article className='car_passenger'>6 passenger</article>
                  <div className='car_detail'>
                    <article className='carName'>{key.carName}</article>
                    <article className="car-type">{key.carType}-{key.model}</article>
                    {/* <article className="car-desc">{key.description}</article> */}
                    <article className='car_price'>{key.perKm} rs/km</article>
                  </div>
                  <div className='admin_car_dateFrom_dateTo'>
                    <article className='available_heading'>Available: </article>
                    <article className='availableTo-from'>
                      {dateToNumeric(key.availableFrom)} - {dateToNumeric(key.availableTo)}
                    </article>
                  </div>
                  <div className="edit-btn">
                    <button className="edit" onClick={() => {
                      adminCarDisplayEditDelete(key);
                    }}>Edit</button>
                  </div>

                </section>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminCarDisplay;
