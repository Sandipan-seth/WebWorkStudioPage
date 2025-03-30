import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ClientForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, time, country } = location.state || {}; 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    locationOption: "meet",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Confirm your details</h2>

        
        <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-4 text-gray-700">
          <span className="mr-2">📅</span>
          <p className="font-semibold">
            {date
              ? new Date(date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "No date selected"}
            , {time || "No time selected"}
          </p>
          <span className="ml-auto bg-gray-300 px-2 py-1 rounded text-sm">
            30m
          </span>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block font-semibold mb-1">Your name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1">Email address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1">Location</label>
            <div className="space-y-2">
              
            <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="locationOption"
                  value="email"
                  checked={formData.locationOption === "email"}
                  onChange={handleChange}
                />
                <span>www.WebWorksStudio@gmail.com</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="locationOption"
                  value="phone"
                  checked={formData.locationOption === "phone"}
                  onChange={handleChange}
                />
                <span>+91-70449-24558</span>
              </label>
            </div>
          </div>

          
          <div>
            <label className="block font-semibold mb-1">Additional notes</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Please share anything that will help prepare for our meeting."
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
          </div>


          
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-300 rounded text-black"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
