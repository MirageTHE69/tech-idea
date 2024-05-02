import React from "react";
import AboutImage from "../images/aboutImage.svg";

function AboutSection() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row-reverse lg:gap-10 items-center justify-center py-10 px-4 lg:px-0">
      <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
        <div className="text-center lg:text-left">
          <span className="text-[#F4790F] text-sm block mb-2">About Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Professional Technology Assistance
          </h2>
          <p className="mb-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare turpis a magna
            porta, id lobortis purus convallis. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Sed nisi.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare turpis a magna
            porta, id lobortis purus convallis. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Sed nisi.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare turpis a magna
            porta, id lobortis purus convallis. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Sed nisi.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 px-4">
        <img src={AboutImage} alt="About" className="w-full" />
      </div>
    </div>
  );
}

export default AboutSection;
