import React from "react";
import Bg from "../images/bg.svg";

function Hero() {
  return (
    <div className="min-w-screen h-auto relative ">
      <img src={Bg} alt="" className="h-auto w-auto" />
      <div className="absolute inset-0 bg-[#08152E] opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Lorem Ipsum is simply dummy text</h1>
        <p className=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text </p>
        <button className="mt-4 px-6 py-2 bg-[#F4790F] text-white  rounded-2xl hover:bg-[#F4790F]">Explore our Products</button>
      </div>
    </div>
  );
}

export default Hero;
