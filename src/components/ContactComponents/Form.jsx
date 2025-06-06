import React from 'react'
import contactLogo from '../../assets/ContactAssets/contactLogo.png';

const Form = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="max-w-7xl w-full">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          Want To Collaborate Together ? <br />
          <span className="text-lime-500 font-bold">Reach</span> Out
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src={contactLogo}
            alt="Form Illustration"
            className="w-48 md:w-64"
          />
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
          />
          <input
            type="text"
            placeholder="Current Website (If any)"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
          />
          <input
            type="text"
            placeholder="What's Your Budget"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
          />
          <input
            type="text"
            placeholder="How did you know about Us"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
          />
          <textarea
            placeholder="Tell Us A Bit About Your Project"
            rows="4"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2 resize-none"
          ></textarea>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="accent-lime-500" />
            <label htmlFor="terms" className="text-sm">
              Agree To The Terms And Conditions
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form
