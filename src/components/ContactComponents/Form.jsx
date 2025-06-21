import React from "react";
import contactLogo from "../../assets/ContactAssets/ContactLogo.png";

const Form = () => {
  const [agreed, setAgreed] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [source, setSource] = React.useState("");
  const [projectDetails, setProjectDetails] = React.useState("");
  const [Loading, setLoading] = React.useState(false);


  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("website", website);
    formData.append("budget", budget);
    formData.append("source", source);
    formData.append("project_details", projectDetails);
    

    //b3927034-5f44-4ec2-a67f-d1f64f95eb45

    formData.append("access_key", "b3927034-5f44-4ec2-a67f-d1f64f95eb45");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setWebsite("");
      setBudget("");
      setSource("");
      setProjectDetails("");
      setAgreed(false);
    } else {
      console.log("Error", data);
    }
    setLoading(false);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-white/50 py-16 max-w-7xl mx-auto px-4 mt-5 md:mt-10">
      <div className="w-full">
        {/* Header */}
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-4">
          Want To Collaborate Together ? <br />
          <span className="text-[#B9F33F] font-bold">Reach</span> Out
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
        <form
          className="space-y-5 md:space-y-7 px-3 md:px-20"
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              Current Website (If any)
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              What's Your Budget
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              How did you know about Us
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-md md:text-xl font-medium text-gray-700 mb-1">
              Tell Us A Bit About Your Project
            </label>
            <textarea
              rows="4"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2 resize-none"
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-lime-500"
              onChange={() => setAgreed(!agreed)}
            />
            <label className="text-sm">Agree To The Terms And Conditions</label>
          </div>

          <div className="flex justify-center md:justify-start">
            {agreed ? (
              <button
                type="submit"
                className="mt-4 w-1/4 bg-black text-white md:text-lg text-sm py-2 rounded-3xl hover:bg-gray-800 transition"
              >
                {
                  Loading ? "Submitting..." : "Submit"
                }
              </button>
            ) : (
              <button
                type="submit"
                disabled
                className="mt-4 w-1/4 bg-gray-300 text-gray-500  md:text-lg text-sm py-2 rounded-3xl font-semibold cursor-not-allowed"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
