import React from "react";
import AboutImage from "../images/aboutImage.svg";

function AboutSection() {
  return (
    <div className="min-w-screen h-auto flex  gap-28 justify-center items-center py-10">
      <div className="flex justify-center  items-center  w-full lg:w-1/3 px-4">
        <img src={AboutImage} alt="About" className="w-full " />
      </div>
      <div className="w-full lg:w-1/3 px-4">
        <div className="text-center lg:text-left">
            <span className=" text-[#F4790F] text-start text-sm">About Us</span>
          <h2 className="text-3xl font-bold mb-4 text-white">Professional Technology Assistance</h2>
          <p className="mb-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ornare turpis a magna porta, id lobortis purus convallis. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ornare turpis a magna porta, id lobortis purus convallis. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>

          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ornare turpis a magna porta, id lobortis purus convallis. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
