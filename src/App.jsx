import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/services" element={<Service />} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/about-us" element={<AboutUs/>}/>
    </Routes>
  );
};

export default App;
