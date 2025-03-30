import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setDescription] = useState("");
  const [form, setForm] = useState({});

  const submitHandle = (e) => {
    e.preventDefault();
    alert("Aplication Submitted Successfully!");
    setForm({
      fullName,
      email,
      contactNumber,
      description,
    });
    setFullName("");
    setEmail("");
    setContactNumber("");
    setDescription("");
    scrollTo(0, 0);
    console.log(form);
  };

  return (
    <div
      className="bg-white/80 mx-auto px-6 py-16 md:py-32 min-h-screen"
      id="contact"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-10">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="w-full md:w-2/3 bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg">
          <form
            className="flex flex-col space-y-5"
            onSubmit={(e) => submitHandle(e)}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-800">
            Our Contact Info
          </h3>
          <p className="text-gray-600 mt-3">
            <strong>Company:</strong> WWS Solutions
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> Kolkata, WB
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +91 8910647915
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
