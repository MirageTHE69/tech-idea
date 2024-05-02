import React from "react";
import MiniSvg1 from '../images/minipc1.svg';
import MiniSvg2 from '../images/minipc2.svg';

function Product() {
  return (
    <div className="flex flex-col lg:flex-row p-10 items-center justify-center">

      {/* Product Description */}
      <div className="lg:w-1/2 flex flex-col text-white p-8 gap-4">
        <span className="text-[#F4790F] text-3xl font-semibold">TI -VH50</span>
        <span className="text-2xl font-semibold">Compact & Powerful Mini PC</span>
        <div className="mt-8 flex flex-col gap-3">
          <div className="flex flex-row items-center">
            <div className="h-2 w-2 rounded-full bg-[#F4790F]"></div>
            <span className="ml-3">
              Support Intel Alder Lake / Jasper Lake / Apollo Lake / Gemini Lake
            </span>
          </div>

          <div className="flex flex-row items-center">
            <div className="h-2 w-2 rounded-full bg-[#F4790F]"></div>
            <span className="ml-3">Compact Size</span>
          </div>
          <div className="flex flex-row items-center">
            <div className="h-2 w-2 rounded-full bg-[#F4790F]"></div>
            <span className="ml-3">Low Power Consumption</span>
          </div>
          <div className="flex flex-row items-center">
            <div className="h-2 w-2 rounded-full bg-[#F4790F]"></div>
            <span className="ml-3">VESA Support</span>
          </div>
        </div>

        <span className="text-xl mt-5">Specification</span>
        <div className="flex flex-col  mt-3">
          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-center">Color</div>
            <span className="ml-3">Compact Size</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-center">CPU</div>
            <span className="ml-3">
              Intel Alder Lake / Jasper Lake / Apollo Lake / Gemini Lake
            </span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-center">Memory</div>
            <span className="ml-3">2x DDR4 SODIMM, Max 64GB</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-center">Storage</div>
            <span className="ml-3">1x M.2 2280 Slot (SATA/NVME)</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-center">Interface</div>
            <span className="ml-3">2x HDMI/VGA/ Gigabit LAN</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-center">IO Ports</div>
            <span className="ml-3">4x USB 3.0/2 in 1 Combo Audio</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-center">WIFI & BT</div>
            <span className="ml-3">Wi-Fi 802.11 N (AC/AX optional) + BT</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-center">Support OS</div>
            <span className="ml-3">
              Microsoft Windows Windows 11 & Linus Ubuntu
            </span>
          </div>
        </div>
      </div>

      {/* Product Images */}
      <div className="lg:w-1/2 bg-[#0D224B] h-[60vh] lg:h-auto flex lg:flex-col p-5 lg:p-0 lg:gap-0 gap-10 items-center justify-center rounded-3xl">
  <div className="w-[80%] lg:w-full flex justify-center">
    <img src={MiniSvg1} className="object-cover max-w-full h-auto" alt="Mini PC 1" />
  </div>
  <div className="w-[80%] lg:w-full flex justify-center">
    <img src={MiniSvg2} className="object-cover max-w-full h-auto" alt="Mini PC 2" />
  </div>
</div>




    </div>
  );
}

export default Product;
