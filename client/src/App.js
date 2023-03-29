import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import CheckRoutes from "./components/checkRoute/check";
import UserBooking from "../src/components/user_booking/userBooking";
import { DataProvider } from "../src/components/user_booking/user_data_context";
import { AdminCarDataProvider } from "./components/adminCarContext/adminCarContext";
import UserCarDisplay from "./components/userCarDisplay/userCarDisplay";
import AdminCarForm from "./components/AdminCarForm/adminCarForm";
import MyBooking from "./components/MyBooking/MyBooking";
import AdminCarDisplay from "./components/AdminCarDisplay/adminCarDisplay";
import Register from "./components/login/register";
import AdminCarEditDelete from "./components/adminCarEdit/adminCarEditDelete";
import CarPayment from "./components/CarPayment/CarPayment";
import EditMYbooking from "./components/user_booking/editMybooking";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkRoute' element={<CheckRoutes />} />
          <Route path='/AdminForm' element={<AdminCarForm />} />
          <Route path='/AdminCarDisplay' element={
            <AdminCarDataProvider> 
              <AdminCarDisplay/>
            </AdminCarDataProvider>
          } 
          />
           <Route path='/AdminCarEditDelete' element={
            <AdminCarDataProvider> 
              <AdminCarEditDelete/>
            </AdminCarDataProvider>
          } 
          />
          <Route
            path='/userBooking'
            element={
              <DataProvider>
                <UserBooking />
              </DataProvider>
            }
          />
          <Route
            path='/userCarDisplay'
            element={
              <DataProvider>
                <UserCarDisplay />
              </DataProvider>
            }
          />
          <Route
            path='/mybooking'
            element={
              <DataProvider>
                <MyBooking />
              </DataProvider>
            }
          />
          <Route
            path='/carpayment'
            element={
              <DataProvider>
                <CarPayment />
              </DataProvider>
            }
          />
          <Route
            path='/editMybooking'
            element={
              <DataProvider>
                <EditMYbooking/>
              </DataProvider>
            }
          />



        </Routes>
      </BrowserRouter>
      {/* >>>>>>> 7e11fda41ca6e7522518396897ac72b16fbbe18b */}
    </div>
  );
}

export default App;
