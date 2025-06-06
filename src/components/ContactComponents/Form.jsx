import React from 'react'
import contactLogo from '../../assets/ContactAssets/contactLogo.png';

const Form = () => {
    const [agreed, setAgreed] = React.useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white/50 py-16 max-w-7xl mx-auto px-4 mt-5 md:mt-10">
      <div className="w-full">
        {/* Header */}
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-4">
          Want To Collaborate Together ? <br />
          <span className="text-lime-500 font-bold">Reach</span> Out
        </h2>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src={contactLogo}
            alt="Form Illustration"
            className="w-48 md:w-80"
          />
        </div>

        {/* Form */}
        <form className="space-y-5 md:space-y-7">
          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
            />
          </div>

          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
            />
          </div>

          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              Current Website (If any)
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
            />
          </div>

          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              What's Your Budget
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
            />
          </div>

          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              How did you know about Us
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
            />
          </div>

          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              Tell Us A Bit About Your Project
            </label>
            <textarea
              rows="4"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2 resize-none"
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="accent-lime-500" onChange={()=>setAgreed(!agreed)} />
            <label htmlFor="terms" className="text-sm">
              Agree To The Terms And Conditions
            </label>
          </div>

          {
            agreed ? (
              <button
            type="submit"
            className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            
          >
            Submit
          </button>
            ) : (
              <button
                type="submit"
                disabled
                className="w-full bg-gray-300 text-gray-500 py-2 rounded-md font-semibold cursor-not-allowed"
              >
                Submit
              </button>
            )
          }
        </form>
      </div>
    </div>
  );
}

export default Form
