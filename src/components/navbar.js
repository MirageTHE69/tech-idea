import React from "react"
import Logo from "../images/logo.svg"

function Navbar() {
  return (
    <nav className="bg-white bg-opacity-5 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className=" h-16 pt-3" />
          </div>
          {/* Menu Items */}
          <div className="flex items-center space-x-8">
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
          <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
