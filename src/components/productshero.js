import React from "react";
import Bg from "../images/bg.svg";

function ProductsHero() {
  return (
    <div className="min-w-screen h-[70vh] bg-[#08152e] relative font-mono">
      <img src={Bg} alt="" className="h-full w-screen object-cover" />
      <div className="absolute inset-0 bg-[#08152E] opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="w-full text-xl">
          Discover a World of Innovation with Tech Idea. Explore our range of
          cutting-edge products, including Mini PC, laptops solutions from Tech
          Idea.
        </p>
      </div>
    </div>
  );
}

export default ProductsHero;
