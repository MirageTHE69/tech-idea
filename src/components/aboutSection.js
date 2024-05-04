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
          Welcome to TechIdea, where innovation meets convenience. From industry-leading antivirus software to powerful mini PCs, stylish laptops, and even sugar cubes, we're here to simplify your digital experience. With a focus on quality and customer satisfaction, TechIdea is dedicated to providing you with the best-in-class tech solutions
          </p>
          <p className="text-white">
          With a relentless commitment to quality, innovation, and customer satisfaction, TechIdea stands as your trusted partner in the ever-evolving world of technology. We understand the importance of staying ahead in a fast-paced digital environment. That's why we continuously strive to provide you with cutting-edge solutions that not only meet but exceed your expectations.
          </p>
          <p className="text-white">
          At TechIdea, we're more than just a tech company; we're your gateway to a seamless digital experience. With a mission to simplify your digital life, we offer an array of innovative tech solutions. Our diverse product range includes top-of-the-line antivirus software, powerful mini PCs, sleek laptops, and even sugar cubes.
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
