import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};

export default App;
