import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../Home";
import Signin from "../auth/Signin";
import AuthLayout from "./AuthLayout";
import SignUp from "../auth/SignUp";
import Admin from "../admin";
import AdminLayout from "./AdminLayout";
import Status from "../admin/Status";
import ShowEvents from "../admin/ShowEvents";
import Gallery from "../admin/Gallery";
import View from "../Details/View";
import Booking from "../Details/Booking";
import Confirmed from "../admin/Confirmed";
import BookingStatus from "../Status";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="/view" element={<View/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/order" element={<BookingStatus/>}/>
        
        </Route>

        <Route element={<AdminLayout/>}>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/Status" element={<Status/>}/>
        <Route path="/showevent" element={<ShowEvents/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/booked" element={<Confirmed/>}/>
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
