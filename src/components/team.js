import React, { useState } from "react"
import Team1 from "../images/partner1.jpg"
import Team2 from "../images/partner.png"
import Team3 from "../images/team3.jpg"

function Team() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="w-screen bg-[#08152E] font-mono">
      <span className="w-full text-3xl font-bold text-white flex items-center justify-center mb-10">
        Our Team
      </span>

      <div className="px-10 py-10 flex flex-col lg:flex-row-reverse items-center justify-center w-full gap-5">
        <div className="sm:w-[40%] lg:w-[30%] lg:h-[50vh] sm:h-[40vh]">
          <img
            src={Team2}
            className="w-full h-full rounded-lg object-cover"
            alt="Team Member 2"
          />
        </div>
        <div className="h-full mt-16 flex flex-col">
          <span className="font-bold text-2xl text-right mr-16 text-[#F4790F] mb-5">
            Vijayendra Salunkhe
          </span>
          <span className="font-base text-xl text-right mr-16 text-[#F4790F] mb-10">
            Sales Director, Tech Idea
          </span>
          <p className="text-white font-medium">
            Vijayendra Salunkhe, Sales Director at Tech Idea, brings over 15
            years of expertise in both hardware and software solutions. With a
            deep understanding of IT products, he drives sales growth and
            fosters client relationships. Vijayendra's broad knowledge makes him
            an asset in delivering customized IT solutions, strengthening Tech
            Idea's position in the tech market.
          </p>
        </div>
      </div>

      <div className="px-10 py-10 flex flex-col lg:flex-row items-center justify-center w-full gap-5">
        <div className="sm:w-[40%] lg:w-[30%] lg:h-[50vh] sm:h-[40vh]">
          <img
            src={Team1}
            className="h-full w-full rounded-lg object-cover"
            alt="Team Member 3"
          />
        </div>
        <div className="h-full mt-16 flex flex-col">
          <span className="font-bold text-2xl text-[#F4790F] mb-5">
            Harshvardhan Bhosale
          </span>
          <span className="font-base text-xl text-[#F4790F] mb-10">
            Finance Director, Tech Idea
          </span>
          <p className="text-white font-medium">
            Harshvardhan Bhosale is the Finance Director at Tech Idea, with
            extensive experience in finance and accounting. With his strategic
            thinking, he oversees financial management, including budgeting and
            compliance. Harshvardhan's leadership drives financial growth,
            contributing to Tech Idea's success. He aims to optimize financial
            processes to support the company's long-term growth vision.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
