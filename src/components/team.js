import React from "react"
import Team1 from "../images/partner1.jpg"
import Team2 from "../images/patner2.jpg"

function Team() {
  return (
    <div class=" w-screen bg-[#08152E]">
      <span className=" w-full text-3xl font-bold text-white flex items-center justify-center mb-10">
        Our Team
      </span>
      <div class="  px-10 py-10 flex  flex-col lg:flex-row item-center justify-center w-full gap-5 ">
        <div class=" sm:w-[40%] lg:w-[30%] lg:h-[50vh] sm:h-[40vh]  ">
          <img src={Team1} className=" h-full w-full rounded-lg  object-center" />
        </div>
        <div class="  h-full  flex flex-col ">
          <span class=" font-bold text-2xl text-[#F4790F] mb-5">
            Harvardan Bhosale
          </span>
          <span class=" font-base text-xl text-[#F4790F] mb-10">
          Finance Director, Tech Idea

          </span>
          <p class=" text-white font-medium">
            Harvardan Bhosale is the Finance Director at Tech Idea, with
            extensive experience in finance and accounting. With his strategic
            thinking, he oversees financial management, including budgeting and
            compliance. Harvardan's leadership drives financial growth,
            contributing to Tech Idea's success. He aims to optimize financial
            processes to support the company's long-term growth vision."
          </p>
        </div>
      </div>

      <div class="  px-10 py-10 flex flex-col    lg:flex-row-reverse item-center justify-center w-full gap-5  ">
        <div class=" sm:w-[40%] lg:w-[30%] lg:h-[50vh] sm:h-[40vh]  ">
          <img src={Team2} className=" w-full h-full rounded-lg object-center" />
        </div>
        <div class="  h-full  flex flex-col ">
          <span class=" font-bold text-2xl text-[#F4790F] mb-5">
            Vijayendra Salaunke
          </span>
          <span class=" font-base text-xl text-[#F4790F] mb-10">
          Sales Director, Tech Idea


          </span>
          <p class=" text-white font-medium">
            Vijayendra Salaunke, Sales Director at Tech Idea, brings over 15
            years of expertise in both hardware and software solutions. With a
            deep understanding of IT products, he drives sales growth and
            fosters client relationships. Vijayendra's broad knowledge makes him
            an asset in delivering customized IT solutions, strengthening Tech
            Idea's position in the tech market
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
