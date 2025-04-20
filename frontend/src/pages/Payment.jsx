import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiClock, FiCreditCard, FiMapPin, FiUser } from "react-icons/fi";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const court = state?.court || {
    id: 1,
    name: "Downtown Sports Complex",
    location: "123 Main St, Kandy",
    price: "Rs.2500.00/hour",
    sports: ["Basketball"]
  };

  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    startTime: "",
    endTime: "",
    hours: 1,
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    const pricePerHour = parseInt(court.price.replace(/\D/g, '')) / 100;
    return (pricePerHour * bookingDetails.hours).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment here (would connect to your payment gateway)
    console.log("Processing payment for:", bookingDetails);
    navigate('/booking-confirmation', { 
      state: { 
        booking: {
          ...bookingDetails,
          court,
          total: `Rs.${calculateTotal()}`,
          bookingId: `BK-${Math.floor(Math.random() * 1000000)}`
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back to Court Details
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Summary */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{court.name}</h3>
              <div className="flex items-center text-gray-600 mb-1">
                <FiMapPin className="mr-2" />
                <span>{court.location}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {court.sports.map((sport, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {sport}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-semibold mb-4">Your Booking Details</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center text-gray-600 mb-1">
                    <FiCalendar className="mr-2" />
                    <span className="text-sm">Date</span>
                  </div>
                  <p className="font-medium">{bookingDetails.date || "Not selected"}</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center text-gray-600 mb-1">
                    <FiClock className="mr-2" />
                    <span className="text-sm">Time</span>
                  </div>
                  <p className="font-medium">
                    {bookingDetails.startTime && bookingDetails.endTime 
                      ? `${bookingDetails.startTime} - ${bookingDetails.endTime}` 
                      : "Not selected"}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <div className="flex justify-between">
                  <span>Price per hour:</span>
                  <span className="font-medium">{court.price}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Duration:</span>
                  <span className="font-medium">{bookingDetails.hours} hour(s)</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount:</span>
                  <span>Rs.{calculateTotal()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
            
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FiUser className="mr-2" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={bookingDetails.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={bookingDetails.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingDetails.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Booking Date</label>
                    <input
                      type="date"
                      name="date"
                      value={bookingDetails.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Start Time</label>
                    <input
                      type="time"
                      name="startTime"
                      value={bookingDetails.startTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Duration (hours)</label>
                    <select
                      name="hours"
                      value={bookingDetails.hours}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      {[1, 2, 3, 4, 5].map(hour => (
                        <option key={hour} value={hour}>{hour} hour{hour > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FiCreditCard className="mr-2" />
                  Payment Method
                </h3>
                
                <div className="flex space-x-4 mb-4">
                  <button type="button" className="border-2 border-blue-500 p-2 rounded-lg">
                    <FaCcVisa className="text-3xl text-blue-800" />
                  </button>
                  <button type="button" className="border-2 border-gray-300 p-2 rounded-lg">
                    <FaCcMastercard className="text-3xl text-gray-700" />
                  </button>
                  <button type="button" className="border-2 border-gray-300 p-2 rounded-lg">
                    <FaCcAmex className="text-3xl text-blue-600" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={bookingDetails.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={bookingDetails.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={bookingDetails.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-lg transition duration-300"
              >
                Pay Rs.{calculateTotal()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;