    import React from "react"
    import ArrowSvg from "../images/arrow.svg"
    import { Link } from "gatsby";
    import MinipcSvg from "../images/minipc1.svg"
    import SugarCubeSvg from "../images/sugar-cube.png"
    import ITXSvg from "../images/ITX-PC.png"
    import PcSvg from "../images/PC.png"
    import LaptopSvg from "../images/laptop.png"


    function ProductSection() {
    return (
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-10  font-mono">
        <div class="h-[60vh] rounded-2xl">
            <div class="flex justify-between flex-col px-8 py-4">
            <span className=" text-[#F4790F]  text-2xl ">Our Products</span>
            <span class="text-white text-2xl mt-10">
                All tech products that are designed for different purposes
            </span>
            </div>
            <Link to="/productspage">
            <button className="px-6 py-2 ml-6 mt-5 bg-[#F4790F] text-white rounded-2xl hover:bg-[#F4790F]">
              Explore More
            </button>
          </Link>

        </div>

        <div class="h-[60vh] rounded-2xl bg-[#0D224B]">
            <div class="flex justify-between px-8 py-4">
            <span class="text-white text-lg font-semibold">Mini pc</span>
            <div class="h-10 w-10 ">
                <img src={ArrowSvg} alt="" />
            </div>
            </div>
            <div class="p-5  ">
            <div class="mb-4 border-t border-white"></div>
            <span class="text-white text-sm">
            Compact & Powerful Mini PC,Compact Size,Low Power Consumption
            </span>
            <img src={MinipcSvg} className="h-[40vh] flex items-center justify-center w-full "/>
            </div>
        </div>

        <div class="h-[60vh] rounded-2xl bg-[#0D224B]">
            <div class="flex justify-between px-8 py-4">
            <span class="text-white text-lg font-semibold">TI -VH17</span>
            <div class="h-10 w-10 ">
                <img src={ArrowSvg} alt="" />
            </div>
            </div>
            <div class="p-5 ">
            <div class="mb-4 border-t border-white"></div>
            <span class="text-white text-sm">
            SugarCube Mini PC.,Ultra Small Size,Low Power Consumption,VESA Support
            </span>
            <div className=" w-full h-full flex items-center justify-center">
            <img src={SugarCubeSvg} className=" h-[30vh] mt-10  "/>
            </div>
            </div>
        </div>

        <div class="h-[60vh] rounded-2xl bg-[#0D224B]">
            <div class="flex justify-between px-8 py-4">
            <span class="text-white text-lg font-semibold">TI -VH70</span>
            <div class="h-10 w-10 ">
                <img src={ArrowSvg} alt="" />
            </div>
            </div>
            <div class="p-5">
            <div class="mb-4 border-t border-white"></div>
            <span class="text-white text-sm">
            Standard  Thin Mini ITX Mini PC
            </span>
            <img src={PcSvg} className="h-[40vh] flex items-center justify-center w-full "/>

            </div>
        </div>

        <div class="h-[60vh] rounded-2xl bg-[#0D224B]">
            <div class="flex justify-between px-8 py-4">
            <span class="text-white text-lg font-semibold"> ITX Mini PC</span>
            <div class="h-10 w-10 ">
                <img src={ArrowSvg} alt="" />
            </div>
            </div>
            <div class="p-5">
            <div class="mb-4 border-t border-white"></div>
            <span class="text-white text-sm">
            Support Intel Embedded Core i / Pentium / Celeron Solutions 
Support AMD Form Factor
            </span>
            <img src={ITXSvg} className="h-[40vh] flex items-center justify-center w-full "/>

            </div>
        </div>

        <div class="h-[60vh]  rounded-2xl bg-[#0D224B]">
            <div class="flex justify-between px-8 py-4">
            <span class="text-white text-lg font-semibold"> Tech Idea Laptops</span>
            <div class="h-10 w-10 ">
                <img src={ArrowSvg} alt="" />
            </div>
            </div>
            <div class="p-5">
            <div class="mb-4 border-t border-white"></div>
            <span class="text-white text-sm">
            laptops with window 10 and multiple color options wiht intel gemini processor
            </span>
            <div className=" w-full h-full flex items-center justify-center">
            <img src={LaptopSvg} className=" mt-5 lg:mt-10   w-[30vh] h-[30vh] "/>
            </div>
            </div>
        </div>

       
        </div>
    )
    }

    export default ProductSection
