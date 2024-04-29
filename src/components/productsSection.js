    import React from "react"
    import ArrowSvg from "../images/arrow.svg"

    function ProductSection() {
    return (
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        <div class="h-[60vh] rounded-2xl">
            <div class="flex justify-between flex-col px-8 py-4">
            <span className=" text-[#F4790F]  text-2xl ">Our Products</span>
            <span class="text-white text-2xl mt-10">
                All tech products that are designed for different purposes
            </span>
            </div>
            <button className="mt-4 px-6 py-2 bg-[#F4790F] ml-6 text-white  rounded-2xl hover:bg-[#F4790F]">Explore More</button>

        </div>

        <div class="h-[60vh] rounded-2xl bg-[#0D224B]">
            <div class="flex justify-between px-8 py-4">
            <span class="text-white text-lg font-semibold">Mini pc</span>
            <div class="h-10 w-10 ">
                <img src={ArrowSvg} alt="" />
            </div>
            </div>
            <div class="p-5">
            <div class="mb-4 border-t border-white"></div>
            <span class="text-white text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </span>
            </div>
        </div>

        <div class="h-[60vh] rounded-2xl bg-[#0D224B]">
            <div class="flex justify-between px-8 py-4">
            <span class="text-white text-lg font-semibold">Mini pc</span>
            <div class="h-10 w-10 ">
                <img src={ArrowSvg} alt="" />
            </div>
            </div>
            <div class="p-5">
            <div class="mb-4 border-t border-white"></div>
            <span class="text-white text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </span>
            </div>
        </div>

        <div class="h-[60vh] rounded-2xl bg-[#0D224B]">
            <div class="flex justify-between px-8 py-4">
            <span class="text-white text-lg font-semibold">Mini pc</span>
            <div class="h-10 w-10 ">
                <img src={ArrowSvg} alt="" />
            </div>
            </div>
            <div class="p-5">
            <div class="mb-4 border-t border-white"></div>
            <span class="text-white text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </span>
            </div>
        </div>

        <div class="h-[60vh] rounded-2xl bg-[#0D224B]">
            <div class="flex justify-between px-8 py-4">
            <span class="text-white text-lg font-semibold">Mini pc</span>
            <div class="h-10 w-10 ">
                <img src={ArrowSvg} alt="" />
            </div>
            </div>
            <div class="p-5">
            <div class="mb-4 border-t border-white"></div>
            <span class="text-white text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </span>
            </div>
        </div>

        <div class="h-[60vh] rounded-2xl bg-[#0D224B]">
            <div class="flex justify-between px-8 py-4">
            <span class="text-white text-lg font-semibold">Mini pc</span>
            <div class="h-10 w-10 ">
                <img src={ArrowSvg} alt="" />
            </div>
            </div>
            <div class="p-5">
            <div class="mb-4 border-t border-white"></div>
            <span class="text-white text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </span>
            </div>
        </div>
        </div>
    )
    }

    export default ProductSection
