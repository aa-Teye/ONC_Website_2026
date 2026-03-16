import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/60 backdrop-blur-md border-b border-white/10 text-white shadow-2xl fixed w-full z-50 top-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Overcomers Nation Logo"
                className="h-13 w-13 object-cover rounded-full bg-white"
              />
              <span className="text-2xl font-extrabold tracking-tight text-white">
                OVERCOMERS NATION
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center font-medium">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link to="/ministries" className="hover:text-blue-400 transition">
              Ministries
            </Link>
            <Link to="/live" className="hover:text-blue-400 transition">
              Watch Live
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>

            <Link
              to="/give"
              className="bg-[#1E4B7A] text-white px-6 py-2 rounded-full font-bold hover:bg-blue-400 transition"
            >
              Give
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none transition"
            >
              {isOpen ? (
                <HiOutlineX className="w-8 h-8" />
              ) : (
                <HiOutlineMenu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col text-center text-gray-900">
            <Link
              to="/"
              className="block px-3 py-4 text-lg font-medium hover:bg-gray-50 transition rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-4 text-lg font-medium hover:bg-gray-50 transition rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/ministries"
              className="block px-3 py-4 text-lg font-medium hover:bg-gray-50 transition rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Ministries
            </Link>
            <Link
              to="/live"
              className="block px-3 py-4 text-lg font-medium hover:bg-gray-50 transition rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Watch Live
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-4 text-lg font-medium hover:bg-gray-50 transition rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/give"
              className="block px-3 py-4 mt-6 mx-4 bg-[#1E4B7A] text-white text-lg rounded-full font-bold hover:bg-blue-700 transition shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Give
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
