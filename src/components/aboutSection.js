import React from "react"
import AboutImage from "../images/aboutImage.svg"

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
            Tech Idea's joint venture with a Taiwanese manufacturing company is
            a testament to our commitment to the "Make in India" initiative.
            Through this partnership, we aim to manufacture high-quality and
            affordable tech products in India. Leveraging the expertise and
            resources of our Taiwanese partners in manufacturing and supply
            chain management, combined with our tech knowledge in software,
            hardware, and design, we can create a range of innovative products,
            including mini PCs, monitors, and all-in-one PCs.{" "}
          </p>
          <p className="text-white">
            Our joint venture not only enables us to produce high-quality tech
            products at affordable prices but also contributes to job creation
            and the growth of the Indian economy. We are developing a
            comprehensive marketing and sales strategy to reach customers across
            India. By leveraging the global supply chain networks of our
            Taiwanese partners, we ensure that our products are readily
            available and affordable for our customers.{" "}
          </p>
          <p className="text-white">
            Furthermore, our joint venture includes collaborations in research
            and development to continuously innovate and improve our products.
            We also provide customer support and after-sales services to ensure
            customer satisfaction and loyalty. This joint venture is a win-win
            situation for all parties involved and perfectly aligns with the
            "Make in India" initiative.{" "}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 px-4">
        <img src={AboutImage} alt="About" className="w-full" />
      </div>
    </div>
  )
}

export default AboutSection
