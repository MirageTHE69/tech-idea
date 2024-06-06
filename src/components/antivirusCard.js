import React from "react"

function AntivirusCard() {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 font-mono bg-gradient-to-r from-[#0d2b4b] to-[#142c52] text-white rounded-3xl shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-[#F4790F] mb-6 md:mb-8">
        Antivirus Information
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-full">
        {/* System Requirements */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 p-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#F4790F] mb-4">
            System Requirements
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none mb-8 text-lg text-left">
            <li className="flex items-center">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mr-2"></span>{" "}
              Intel Or AMD X32 / X64
            </li>
            <li className="flex items-center">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mr-2"></span>{" "}
              Minimum RAM: 1 GB
            </li>
            <li className="flex items-center">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mr-2"></span>{" "}
              Free Disk Space: 800 MB
            </li>
            <li className="flex items-center">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mr-2"></span>{" "}
              Windows 7
            </li>
            <li className="flex items-center">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mr-2"></span>{" "}
              Windows 8
            </li>
            <li className="flex items-center">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mr-2"></span>{" "}
              Windows 10
            </li>
            <li className="flex items-center">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mr-2"></span>{" "}
              Windows 11
            </li>
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-full border-l border-gray-500 mx-4"></div>

        {/* Operating Systems */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 p-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#F4790F] mb-4">
            Operating Systems
          </h3>
          <ul className="grid grid-cols-1 gap-2 list-none mb-8 text-lg text-left">
            <li className="flex items-start">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mt-2 mr-2"></span>
              <span>
                Microsoft Windows 11 Home / Pro
                <br />
                Enterprise / Education
              </span>
            </li>
            <li className="flex items-start">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mt-2 mr-2"></span>
              <span>
                Microsoft Windows 10 Home / Pro / Enterprise / Education - 32 /
                64-bit
              </span>
            </li>
            <li className="flex items-start">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mt-2 mr-2"></span>
              <span>
                Microsoft Windows 8.1 / Pro / Enterprise - 32 / 64-bit
              </span>
            </li>
            <li className="flex items-start">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mt-2 mr-2"></span>
              <span>Microsoft Windows 8 / Pro / Enterprise - 32 / 64-bit</span>
            </li>
            <li className="flex items-start">
              <span className="dot bg-[#F4790F] rounded-full w-3 h-3 mt-2 mr-2"></span>
              <span>
                Microsoft Windows 7 Home Basic / Home Premium /<br />{" "}
                Professional / Enterprise / Ultimate - Service Pack 1 with<br />
                Convenient Rollup Update, 32 / 64-bit
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 14-Day Free Trial Section */}
      <div className="p-6 md:p-8 rounded-lg w-full text-center flex flex-col items-center justify-center mt-6 md:mt-8">
        <span className="block text-2xl md:text-5xl font-semibold mb-8 text-[#F4790F]">
          14-Day Free Trial
        </span>
        <a
          href="https://drive.google.com/file/d/1_3Ys4GoZmVv8_OsfH9dV-TVMfRmERtir/view?usp=drive_link"
          download
        >
          <button className="bg-[#F4790F] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-[#e2680c] transition duration-300">
            Download Now
          </button>
        </a>
      </div>
    </div>
  )
}

export default AntivirusCard
