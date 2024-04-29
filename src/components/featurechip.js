import React from "react";

function Featurechip({ text }) {
  return (
    <div className="flex h-14 items-center justify-center text-white rounded-3xl bg-[#0D224B]">
      <span>{text}</span>
    </div>
  );
}

export default Featurechip;
