import React from "react";
import MiniSvg1 from '../images/minipc1.svg';
import MiniSvg2 from '../images/minipc2.svg';

function Product2({name,disp,specs1,specs2,specs3,specs4,color,cpu,memory,storage,interfaces,io,wifi,os,img1,img2}) {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse p-10 items-center justify-center font-Monrope">

      {/* Product Description */}
      <div className="lg:w-1/2 flex flex-col text-white p-8 gap-4">
        <span className="text-[#F4790F] text-3xl font-semibold">{name}</span>
        <span className="text-2xl font-semibold">{disp}</span>
        <div className="mt-8 flex flex-col gap-3">
          <div className="flex flex-row items-center">
            <div className="h-2 w-2 rounded-full bg-[#F4790F]"></div>
            <span className="ml-3">
              {specs1}
            </span>
          </div>

          <div className="flex flex-row items-center">
            <div className="h-2 w-2 rounded-full bg-[#F4790F]"></div>
            <span className="ml-3">{specs2}</span>
          </div>
          <div className="flex flex-row items-center">
            <div className="h-2 w-2 rounded-full bg-[#F4790F]"></div>
            <span className="ml-3">{specs3}</span>
          </div>
          <div className="flex flex-row items-center">
            <div className="h-2 w-2 rounded-full bg-[#F4790F]"></div>
            <span className="ml-3">{specs4}</span>
          </div>
        </div>

        <span className="text-xl mt-5">Specification</span>
        <div className="flex flex-col  mt-3">
          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-start">Color</div>
            <span className="ml-3">{color}</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-start">CPU</div>
            <span className="ml-3">
             {cpu}
            </span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-start">Memory</div>
            <span className="ml-3">{memory}</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-start">Storage</div>
            <span className="ml-3">{storage}</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-start">Interface</div>
            <span className="ml-3">{interfaces}</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-start">IO Ports</div>
            <span className="ml-3">{io}</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-start">WIFI & BT</div>
            <span className="ml-3">{wifi}</span>
          </div>

          <div className="flex flex-row">
            <div className="rounded-full  w-16 text-start">Support OS</div>
            <span className="ml-3">
             {os}
            </span>
          </div>
        </div>
      </div>

      {/* Product Images */}
      <div className="lg:w-1/2 bg-[#0D224B] h-[60vh] lg:h-auto flex flex-col lg:flex-col px-16 p-5 lg:p-0 lg:gap-0 gap-10 items-center justify-center rounded-3xl">
  <div className=" lg:w-full flex justify-center ">
    <img src={img1} className="object-cover max-w-full h-[20vh] lg:h-[50vh]  pt-5" alt="Mini PC 1" />
  </div>
  <div className=" lg:w-full flex justify-center">
    <img src={img2} className="object-cover max-w-full h-[20vh] lg:h-[50vh]" alt="Mini PC 2" />
  </div>
</div>




    </div>
  );
}

export default Product2;
