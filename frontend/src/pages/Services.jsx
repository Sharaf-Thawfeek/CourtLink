import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import TeamSection from "../components/Team/TeamSection";
import Testimonial from "../components/Testimonial/Testimonial";

// Import Images
import aboutHero from "../assets/images/hero-img1.jpg";
import missionImg from "../assets/images/about.jpg";
import visionImg from "../assets/images/about.jpg";
import valuesImg from "../assets/images/about.jpg";
import Mission from '../assets/images/mission.jpg'

const Sercices = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero__section pt-[60px] 2xl:h-[500px] bg-lightBlue">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Left Side: Text Content */}
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                About CourtLink
              </h1>
              <p className="text-gray-600 text-lg mt-4">
                Revolutionizing the way sports enthusiasts book and manage court reservations.
                Our platform connects players with premium facilities nationwide.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-6 py-3 mt-4 rounded-lg shadow-md">
                Learn More
              </button>
            </div>

            {/* Right Side: Hero Image */}
            <div className="flex justify-end">
              <img
                className="w-full max-w-[600px] rounded-lg shadow-lg"
                src={aboutHero}
                alt="CourtLink Team"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="xl:w-[670px] mx-auto text-center mb-16">
            <h2 className="heading">Our Story</h2>
            <p className="text__para">
              Founded in 2023, CourtLink began with a simple mission: to make court booking
              effortless for players and facility owners alike. What started as a local solution
              has grown into a nationwide platform serving thousands of users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Milestone 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 text-4xl font-bold mb-4">2023</div>
              <h3 className="text-xl font-semibold mb-2">Concept Born</h3>
              <p className="text-gray-600">
                The idea for CourtLink emerged from our founder's frustration with outdated booking systems.
              </p>
            </div>

            {/* Milestone 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 text-4xl font-bold mb-4">2024</div>
              <h3 className="text-xl font-semibold mb-2">First Prototype</h3>
              <p className="text-gray-600">
                Developed initial platform with 5 local sports facilities as partners.
              </p>
            </div>

            {/* Milestone 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 text-4xl font-bold mb-4">2025</div>
              <h3 className="text-xl font-semibold mb-2">National Launch</h3>
              <p className="text-gray-600">
                Expanded to serve 100+ facilities across the country with 50,000+ users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="heading text-center mb-16">Our Core Principles</h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <img 
                src={Mission} 
                alt="Our Mission" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-headingColor">Mission</h3>
              <p className="text__para mb-4">
                To empower sports communities by providing seamless access to quality facilities
                through innovative technology and exceptional service.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <BsArrowRight className="text-blue-600 mt-1 mr-2" />
                  <span>Simplify court booking for players</span>
                </li>
                <li className="flex items-start">
                  <BsArrowRight className="text-blue-600 mt-1 mr-2" />
                  <span>Maximize facility utilization for owners</span>
                </li>
                <li className="flex items-start">
                  <BsArrowRight className="text-blue-600 mt-1 mr-2" />
                  <span>Foster active lifestyles nationwide</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <img 
                src={visionImg} 
                alt="Our Vision" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-headingColor">Vision</h3>
              <p className="text__para">
                To become the leading sports facility management platform globally, connecting
                millions of players with their perfect playing spaces while revolutionizing
                how sports facilities operate.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src={valuesImg} 
                alt="Our Values" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-headingColor">Values</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                  <p className="text-gray-600">
                    We constantly push boundaries to deliver cutting-edge solutions.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Community</h4>
                  <p className="text-gray-600">
                    We believe in building strong sports communities through accessibility.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Integrity</h4>
                  <p className="text-gray-600">
                    We operate with transparency and honesty in all our dealings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="xl:w-[470px] mx-auto text-center mb-16">
            <h2 className="heading">Meet Our Team</h2>
            <p className="text__para">
              Passionate professionals dedicated to transforming your sports experience.
            </p>
          </div>
          <TeamSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="heading">What Our Partners Say</h2>
          <p className="text__para mb-16">
            Hear from facility owners who have transformed their operations with CourtLink.
          </p>
          <Testimonial />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the CourtLink Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a player looking for courts or a facility owner wanting to maximize bookings,
            we have the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Sign Up as Player
            </Link>
            <Link 
              to="/facility-signup" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              List Your Facility
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sercices;