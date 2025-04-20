import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/Logo1.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12 text-gray-700 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="mb-8">
            <img src={logo} className="h-12 mb-4" alt="CourtLink Logo"/>
            <p className="text-gray-600 mb-4">
              Copyright © 2025 CourtLink, developed by Ramzy Hafeel. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600">
                  About CourtLink
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Court Booking */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Court Booking</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/book-court" className="text-gray-600 hover:text-blue-600">
                  Book a Court
                </Link>
              </li>
              <li>
                <Link to="/my-bookings" className="text-gray-600 hover:text-blue-600">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link to="/court-owners" className="text-gray-600 hover:text-blue-600">
                  For Court Owners
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-blue-600">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-blue-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500">
          <p>All rights reserved. Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
