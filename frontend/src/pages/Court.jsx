import React, { useState } from "react";
import { FiSearch, FiFilter, FiMapPin, FiStar, FiCalendar, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import Court1 from '../assets/images/c1.jpg';
import Court2 from '../assets/images/c2.jpg';
import Court3 from '../assets/images/c3.jpg';

const FindCourt = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample court data - replace with your actual data
  const courts = [
    {
      id: 1,
      name: "Downtown Sports Complex",
      location: "123 Main St, Kandy",
      rating: 4.8,
      price: "Rs.2500.00/hour",
      type: "indoor",
      sports: ["Basketball", "Volleyball"],
      availability: "Open now"
    },
    {
      id: 2,
      name: "Riverside Tennis Club",
      location: "456 River Rd, Mawanella",
      rating: 4.5,
      price: "Rs.1500.00/hour",
      type: "outdoor",
      sports: ["Tennis"],
      availability: "Open until 10pm"
    },
    {
      id: 3,
      name: "Elite Badminton Center",
      location: "789 Sports Ave, Matale",
      rating: 4.9,
      price: "Rs.2500.00/hour",
      type: "indoor",
      sports: ["Badminton"],
      availability: "Open now"
    },
    {
      id: 4,
      name: "Community Soccer Field",
      location: "321 Park Blvd, Kandy",
      rating: 4.2,
      price: "Rs.1800.00/hour",
      type: "outdoor",
      sports: ["Soccer", "Football"],
      availability: "Open until 12pm"
    },
  ];

  // Filter courts based on search and active filter
  const filteredCourts = courts.filter(court => {
    const matchesSearch = court.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         court.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || court.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search Section */}
      <section className="bg-lightBlue py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Find Your Perfect Court</h1>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-2">
            <div className="flex items-center">
              <div className="flex-grow relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by court name or location..."
                  className="w-full pl-12 pr-4 py-3 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg ml-2 flex items-center">
                <FiFilter className="mr-2" />
                Filters
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex justify-center mt-6 space-x-4">
            {["all", "indoor", "outdoor"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full capitalize ${activeFilter === filter ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courts Listing Section */}
      <section className="py-12">
        <div className="container">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {filteredCourts.length} {filteredCourts.length === 1 ? "Court" : "Courts"} Available
            </h2>
            <div className="flex items-center">
              <span className="mr-2">Sort by:</span>
              <select className="border rounded-lg px-3 py-2">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Distance</option>
              </select>
            </div>
          </div>

          {/* Courts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourts.map((court) => (
              <div key={court.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                {/* Court Image - Using your placeholder */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={Court2}  // Update this path to your image
                    alt={court.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm flex items-center">
                    <FiStar className="text-yellow-500 mr-1" />
                    <span className="font-medium">{court.rating}</span>
                  </div>
                </div>

                {/* Court Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{court.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <FiMapPin className="mr-2" />
                    <span>{court.location}</span>
                  </div>
                  
                  {/* Sports Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {court.sports.map((sport) => (
                      <span key={sport} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {sport}
                      </span>
                    ))}
                  </div>

                  {/* Price and Availability */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-lg font-bold text-blue-600">{court.price}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiClock className="mr-1" />
                      {court.availability}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg flex items-center justify-center transition">
                      <FiCalendar className="mr-2" />
                      View Calendar
                    </button>
                    <Link 
                      to="/payments"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center transition"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredCourts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No courts found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Map View CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Prefer to browse on a map?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            View all available courts in your area with our interactive map.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300">
            Open Map View
          </button>
        </div>
      </section>
    </div>
  );
};

export default FindCourt;