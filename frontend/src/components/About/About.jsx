import React from "react";
import { Link } from "react-router-dom";

// Import Images
import aboutImg from "../../assets/images/about.jpg";
import aboutCardImg from "../../assets/images/about-card.png";

const About = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          
          {/* About Image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="CourtLink" className="rounded-lg shadow-lg" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="Court Booking" className="rounded-lg shadow-md" />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-headingColor">
              Your Ultimate Indoor Sports Booking Solution
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              <b>**CourtLink** </b>is a modern indoor sports booking system designed to
              simplify the process of reserving courts and managing bookings. Whether
              you're a player looking for the perfect slot or a court owner managing
              reservations, CourtLink provides a seamless experience.
            </p>
            <p className="text-lg text-gray-600 mt-6">
              Our platform ensures easy and hassle-free court bookings, allowing users
              to view real-time availability, make secure payments, and receive instant
              confirmations. We aim to bridge the gap between players and court owners
              with an efficient, tech-driven solution.
            </p>
            <Link to="/about">
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-6 py-3 rounded-lg shadow-md">
                Learn More
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
