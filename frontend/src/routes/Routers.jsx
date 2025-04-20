
import Home from "../pages/Home"
import Services from "../pages/Services"
import Login from "../pages/Login"
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Court from "../pages/Court"
import CourtDetails from "../pages/Courts/CourtDetails";
import Payment from "../pages/Payment";

import {Routes, Route} from "react-router-dom";


const Routers =()=>{
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courts" element={<Court />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/courts/:id" element={<CourtDetails />} />
    </Routes>
  );
};

export default Routers;