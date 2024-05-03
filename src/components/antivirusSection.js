import React from "react"
import Image from "../images/imageinfo.svg"
import { Link } from "gatsby"

function AntiVirusSection() {
  return (
    <div className="flex items-center p-16">
      <div className="h-[85%] w-full flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[60%] p-5">
          <span className="text-start text-2xl font-bold text-white">
            Anti virus
          </span>
          <p className="mb-4 mt-3 text-white">
            TechIdea antivirus offers comprehensive protection against malware,
            spyware, ransomware, and more. Our advanced detection algorithms and
            real-time scanning keep your devices safe and secure, allowing you
            to browse, shop, and bank online with confidence.
          </p>
          <div className="h-auto w-full text-white">
            <h2 className="text-xl font-semibold">1. Behavior Detection</h2>
            <p>
              Detection types range from very specific hashes to Advanced DNA
              Detections, which are complex definition of malicious behavior and
              malware characteristics. We perform deep analysis of the code and
              extract “genes” that are responsible forints behavior and
              construct Advanced DNA Scan
            </p>
          </div>
          <div className="h-auto w-full text-white">
            <h2 className="text-xl font-semibold">2. Advanced DNA Scan</h2>
            <p>
              It uses the combined power of neural networks and a handpicked
              group of four classification algorithms. Unknown, potentially
              malicious applications and other possible threats are monitored
              and stops the offending program or process from carrying out
              potentially harmful activity.
            </p>
          </div>
          <div className="h-auto w-full text-white">
            <h2 className="text-xl font-semibold">3. Anti-Ransome Engine</h2>
            <p>
              Very effective in preventing new and unknown ransomware from
              encrypting your files! When malicious activity is detected all
              non=essential program are terminated, stopped malicious software d
              in it’s tracks.
            </p>
          </div>
          <Link to="/antiviruspage">
            <button className="px-6 py-2 mt-5 bg-[#F4790F] text-white rounded-2xl hover:bg-[#F4790F]">
              Explore More
            </button>
          </Link>
        </div>
        <img src={Image} alt=" " className="w-full lg:w-auto" />
      </div>
    </div>
  )
}

export default AntiVirusSection
