import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import { services } from "./../assets/data/services";
import CourtList from "../components/Courts/CourtList";
import FaqList from "../components/Faq/FaqList"; // Importing FaqList
import Testimonial from "../components/Testimonial/Testimonial";

// Import Images
import heroImg01 from "../assets/images/hero-img1.jpg";
import heroImg02 from "../assets/images/hero-img2.jpg";
import heroImg03 from "../assets/images/hero-img3.jpg";
import iconImg01 from "../assets/images/icon01.png";
import iconImg02 from "../assets/images/icon02.png";
import iconImg03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img1.jpg"; // Corrected duplicate import
import avatarIcon from "../assets/images/user.png";


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px] bg-lightBlue">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Left Side: Text Content */}
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                Book Your Favorite Court Instantly!
              </h1>
              <p className="text-gray-600 text-lg mt-4">
                Find and book the best sports courts near you with ease. Enjoy
                seamless scheduling, secure payments, and an enhanced playing
                experience with CourtLink!
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-6 py-3 mt-4 rounded-lg shadow-md">
                Book a Court
              </button>
            </div>

            {/* Right Side: Hero Images */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  className="w-full rounded-lg shadow-lg"
                  src={heroImg01}
                  alt="Sports Court"
                />
              </div>
              <div className="mt-[30px] flex flex-col gap-[30px]">
                <img
                  src={heroImg02}
                  alt="Player in action"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src={heroImg03}
                  alt="Turf with players"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Hero Counter Section */}
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
            {[{ count: "30+", text: "Courts Available", color: "bg-yellow-500" },
              { count: "50K+", text: "Bookings Completed", color: "bg-purple-500" },
              { count: "99%", text: "Customer Satisfaction", color: "bg-blue-500" }]
              .map((item, index) => (
                <div key={index}>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    {item.count}
                  </h2>
                  <span className={`w-[100px] h-2 ${item.color} rounded-full block mt-[-14px]`}></span>
                  <p className="text-gray-600 text-lg">{item.text}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section */}
      <About />
      {/* About Section end */}

      {/* Services Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Services</h2>
            <p className="text__para text-center">
              We provide a wide range of services to make your experience
              seamless and enjoyable.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* Services Section end */}

      {/* Feature Section Start */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">Book a court <br /> anytime, anywhere.</h2>
              <ul className="pl-4">
                <li className="text_para">1. Browse available courts and book your preferred slot instantly.</li>
                <li className="text_para">2. Check court availability and schedule bookings directly through the app.</li>
                <li className="text_para">3. Easily reschedule or cancel bookings as per your convenience through the app.</li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img
                src={featureImg}
                className="w-3/4"
                alt="Court Booking Feature"
              />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] lg:text-[16px] font-semibold text-gray-700">
                    Top Of the Month
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  +150 Booking
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="User Avatar" className="w-8 h-8 rounded-full" />
                  <span className="text-gray-700 text-sm font-medium">Sharaf Thawfeek</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section End */}

      {/* Our Featured Courts Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Courts</h2>
            <p className="text_para text-center">
              Premium courts for every sport. Book your preferred court with
              ease and enjoy a seamless playing experience.
            </p>
          </div>
          <CourtList />
        </div>
      </section>
      {/* Our Featured Courts End */}

      
      {/*testimonial start*/}
      <section>
        <div className="container text-center">
          <h2 className="heading">What our users say</h2>
          <p className="text__para">
            Seamless booking for everyone. CourtLink offers unmatched convenience and expert management for sports facilities.
          </p>
          <Testimonial />
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="container">
          <FaqList />
        </div>
      </section>
      {/* FAQ Section End */}
      
      
    </>
  );
};

export default Home;
