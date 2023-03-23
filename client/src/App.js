import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import CheckRoutes from "./components/checkRoute/check";
import UserBooking from "../src/components/user_booking/userBooking";
import {DataProvider} from "../src/components/user_booking/user_data_context";
import UserCarDisplay from "./components/userCarDisplay/userCarDisplay";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/checkRoute" element={<CheckRoutes />} />
          <Route path="/userBooking" element={<DataProvider><UserBooking /></DataProvider>} />
          <Route path="/userCarDisplay" element={<DataProvider><UserCarDisplay /></DataProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
