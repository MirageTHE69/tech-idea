import React from "react";

function Featurechip({ text }) {
  return (
    <div className="flex h-[10vh] lg:h-[10vh] items-center justify-center text-center text-white rounded-3xl" style={{ background: 'linear-gradient(135deg, #0D224B 0%, #04080f 100%)' }}>
    <span className="">{text}</span>
  </div>
  
  );
}

export default Featurechip