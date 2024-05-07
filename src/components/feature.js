import React from "react";
import Featurechip from "./featurechip";

function FeatureSection() {
  const texts = [
    "Anti-virus",
    "Anti-Spyware",
    "PUP/PUA",
    "Adware Worms",
    "Trojan",
    "Cloud Scan engine",
    "Advanced Ransom engine",
    "Zero Day Protection",
    "Proactive Protection",
    "Exploit Protection",
    "Behavior Detection",
    "Behavior Detection",
    "Speedo Scanner",
    "Autorun Protection",
    "Light Weight Anti-Virus",
    "Privacy Protection",
    "Parental Control",
    "USB Vaccination",
    "Tracking Protection",
    "Autorun Protection",
    "Light Weight Anti-Virus",
    "Privacy Protection",
    "Parental Control",
    "Exploit Protection",
  ];

  return (
    <div className="min-w-screen h-auto p-20 font-Monrope">
      <span className="w-full items-center flex justify-center text-lg text-[#F4790F]">
        Explore Feature
      </span>
      <span className="w-full items-center  flex justify-center text-3xl mt-6 font-semibold text-white">
        Anti virus Products Features
      </span>
      <div className="grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {texts.map((text, index) => (
          <Featurechip key={index} text={text} />
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
