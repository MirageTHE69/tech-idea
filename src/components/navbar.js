import React, { useState } from "react";
import Logo from "../images/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-5 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-16 pt-3" />
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300 no-underline">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 no-underline">
              Product
            </a>
            <a href="#" className="text-white hover:text-gray-300 no-underline">
              Contact Us
            </a>
          </div>
          {/* Contact Button */}
          <button className="hidden md:block border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black">
            Contact Us
          </button>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center mt-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 no-underline my-2"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 no-underline my-2"
                onClick={toggleMenu}
              >
                Product
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 no-underline my-2"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
              <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black my-2">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
