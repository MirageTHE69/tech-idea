import React from "react";
import Bg from "../images/bg.svg";

function ProductsHero() {
  return (
    <div className="min-w-screen h-[70vh] bg-[#08152e] relative">
      <img src={Bg} alt="" className="h-full w-screen object-cover" />
      <div className="absolute inset-0 bg-[#08152E] opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold text-center lg:text-left">
          Our Products
        </h1>
        <p className="text-center lg:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text 
        </p>
      </div>
    </div>
  );
}

export default ProductsHero;
