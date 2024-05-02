import React from "react";
import Bg from "../images/bg.svg";

function AntivirusHero() {
  return (
    <div className="min-w-screen h-[70vh] lg:h-[70vh] bg-[#08152e] relative">
      <img src={Bg} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#08152E] opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl lg:text-6xl font-bold text-center">Anti Virus</h1>
        <p className="text-center text-lg lg:text-xl max-w-3xl px-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text 
        </p>
      </div>
    </div>
  );
}

export default AntivirusHero;
