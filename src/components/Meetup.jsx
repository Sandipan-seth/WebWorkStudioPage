import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const asianCountries = [
  { name: "India", timezone: "Asia/Kolkata" },
  { name: "China", timezone: "Asia/Shanghai" },
  { name: "Japan", timezone: "Asia/Tokyo" },
  { name: "South Korea", timezone: "Asia/Seoul" },
  { name: "Indonesia", timezone: "Asia/Jakarta" },
  { name: "Thailand", timezone: "Asia/Bangkok" },
  { name: "Vietnam", timezone: "Asia/Ho_Chi_Minh" },
  { name: "Malaysia", timezone: "Asia/Kuala_Lumpur" },
  { name: "Philippines", timezone: "Asia/Manila" },
  { name: "Singapore", timezone: "Asia/Singapore" }
];

const Meetup = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(asianCountries[0]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const navigate = useNavigate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  useEffect(() => {
    setSelectedTime(null);
  }, [selectedDate]);

  const handlePrevMonth = () => {
    if (currentYear > today.getFullYear() || (currentYear === today.getFullYear() && currentMonth > today.getMonth())) {
      setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
      if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      const selectedDateTime = new Date(currentYear, currentMonth, selectedDate).toISOString(); 
      navigate("/clientform", { 
        state: { 
          date: selectedDateTime, 
          time: selectedTime, 
          country: selectedCountry 
        } 
      });
    }
  };

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return [];
  
    
    const now = new Date();
    const currentTimezoneTime = new Date().toLocaleString("en-US", { timeZone: selectedCountry.timezone });
    const localTime = new Date(currentTimezoneTime);
    const currentHour = localTime.getHours();
    const currentMinute = localTime.getMinutes();
  
    
    const selectedFullDate = new Date(currentYear, currentMonth, selectedDate);
  
    
    return [
      "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
      "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
      "15:00", "15:30", "16:00", "16:30", "17:00"
    ].filter((time) => {
      const [hour, minute] = time.split(":").map(Number);
  
      
      if (selectedFullDate > now) return true;
  
      
      return selectedFullDate.toDateString() === now.toDateString()
        ? hour > currentHour || (hour === currentHour && minute >= currentMinute)
        : true;
    });
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold">Client Meet</h2>
            <p className="text-gray-600 text-sm mt-1">
              Thank you for joining us today. We're excited to discuss your
              project and explore new opportunities together. Your insights and
              contributions are invaluable to us. Let's make this session
              productive and engaging!
            </p>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700">Select Country</label>
              <select
                className="mt-1 p-2 border rounded w-full"
                value={selectedCountry.name}
                onChange={(e) =>
                  setSelectedCountry(asianCountries.find(c => c.name === e.target.value))
                }
              >
                {asianCountries.map((country) => (
                  <option key={country.name} value={country.name}>{country.name} ({country.timezone})</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between items-center mb-2">
            <button onClick={handlePrevMonth} className="p-2 bg-gray-200 rounded">◀</button>
            <h3 className="text-lg font-semibold">
              {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
            </h3>
            <button onClick={handleNextMonth} className="p-2 bg-gray-200 rounded">▶</button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {[...Array(firstDayOfMonth)].map((_, i) => (
              <div key={"empty-" + i} className="p-2"></div>
            ))}
            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const isPastDate = new Date(currentYear, currentMonth, day) < today;
              return (
                <div
                  key={i}
                  className={`p-2 rounded cursor-pointer ${
                    isPastDate ? "text-gray-400 cursor-not-allowed" : selectedDate === day ? "bg-black text-white" : "hover:bg-gray-200"
                  }`}
                  onClick={() => !isPastDate && setSelectedDate(day)}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Selected Date: {selectedDate || "None"}</h4>
          <div className="grid grid-cols-2 gap-2">
            {getAvailableTimeSlots().map((time) => (
              <button
                key={time}
                className={`p-2 rounded text-center ${selectedTime === time ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
          <button onClick={handleContinue} className={`mt-4 px-4 py-2 rounded text-white ${selectedDate && selectedTime ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`} disabled={!selectedDate || !selectedTime}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meetup;