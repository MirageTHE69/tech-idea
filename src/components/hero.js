import React from "react";
import Bg from "../images/bg.svg";

function Hero() {
  return (
    <div className="min-h-screen relative">
      <img src={Bg} alt="" className="absolute inset-0 w-full h-full object-cover font-Monrope" />
      <div className="absolute inset-0 bg-[#08152E] opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8">
        <h1 className="text-4xl font-bold text-center md:text-5xl lg:text-5xl">
        Secure Your Digital Life with TechIdea's Antivirus, laptops and mini pc
        </h1>
        <h1 className="text-4xl font-bold text-center md:text-5xl lg:text-3xl font-Monrope  ">
        We make Technology accessible !!!
        </h1>
        <p className="text-center md:text-lg lg:text-xl max-w-lg mt-4 font-Monrope">
        Empowering Your Digital Experience with Cutting-Edge Antivirus and Mini PC and Laptops Solutions from TechIdea
        </p>
        <button className="mt-8 px-6 py-3 bg-[#F4790F] text-white rounded-2xl hover:bg-[#F4790F] font-Monrope">
          Explore our Products
        </button>
      </div>
    </div>
  );
}

export default Hero;
