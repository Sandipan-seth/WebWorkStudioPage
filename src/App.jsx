import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Meetup from "./components/Meetup";
import ClientForm from "./components/ClientForm";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/meetup" element={<Meetup/>} />
        <Route path="/clientform" element={<ClientForm />} />
      </Routes>
  );
};

export default App;
