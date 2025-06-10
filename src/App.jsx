import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/services" element={<Service />} />
      <Route path="/blogs" element={<Blogs/>} />
    </Routes>
  );
};

export default App;
