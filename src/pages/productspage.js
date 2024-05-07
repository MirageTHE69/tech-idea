import React from "react"
import Navbar from "../components/navbar"
import ProductsHero from "../components/productshero"
import Product from "../components/product"
import Footer from "../components/footer"
import MiniSvg1 from "../images/minipc1.svg"
import MiniSvg2 from "../images/minipc2.svg"
import SugarCubeSvg from "../images/sugar-cube.png"
import SugarCubeSvg2 from "../images/sugar-cube2.png"
import ITX1 from "../images/ITX-PC.png"
import ITX2 from "../images/ITX-PC.png"
import Product2 from "../components/product2"
import Laptop1 from "../images/laptop.png"
import Laptop2 from "../images/laptop2.png"


function ProductPage() {
  return (
    <div className=" min-w-screen h-auto bg-[#08152e]">
      <Navbar />
      <ProductsHero />
      <Product
        name="TI-VH50"
        disp="Compact & Powerful Mini PC"
        specs1="Support Intel Alder Lake / Jasper Lake / Apollo Lake / Gemini Lake"
        specs2="Compact Size"
        specs3="Low Power Consumption"
        specs4="VESA Support"
        color="Navy Blue"
        cpu="Intel Alder Lake / Jasper Lake / Apollo Lake / Gemini Lake"
        memory="2x DDR4 SODIMM, Max 64GB"
        storage="1x M.2 2280 Slot (SATA/NVME)"
        interfaces="2x HDMI/VGA/ Gigabit LAN"
        io="4x USB 3.0/2 in 1 Combo Audio"
        wifi="Wi-Fi 802.11 N (AC/AX optional) + BT"
        os="Microsoft Windows Windows 11 & Linus Ubuntu"
        img1={MiniSvg1}
        img2={MiniSvg2}
      />
      <Product2
        name="TI -VH17"
        disp="SugarCube Mini PC"
        specs1="Support Intel  Jasper Lake N5100 4 Cores, 4MB, 1.10~2.80 GHz"
        specs2="Ultra Small Size"
        specs3="Low Power Consumption"
        specs4="VESA Support"
        color="black metal"
        cpu="Intel  Jasper Lake N5100 4 Cores, 4MB cache, .10~2.80 GHZ"
        memory="4GB / LPDDR4"
        storage="128GB eMMC"
        interfaces="HDMI / VGA / Gigabit LAN"
        io="2x USB 3.0 / 2 in 1  Combo Audio"
        wifi="Wi-Fi 802.11 N (AC/AX optional) + BT"
        os="Microsoft Windows Windows 11 & Linus Ubuntu"
        img1={SugarCubeSvg}
        img2={SugarCubeSvg2}
      />
      <Product
        name="TI-VH70"
        disp="Standard  Thin Mini ITX Mini PC"
        specs1="Support Intel Desktop Socket Core-i Solutions, Max 65W"
        specs2="Support Intel Embedded Core i / Pentium / Celeron Solutions 
            Support AMD Form Factor"
        specs3="VESA Support"
        specs4="compact"
        color="black metal"
        cpu="Intel Embedded Core i / Pentium / Celeron Solutions, 
            Max 65W  AMD Form Factor, Max 65W"
        memory="SODIMM Slot"
        storage="2.5” SATA HDD / SSD Bay"
        interfaces="HDMI / VGA / Gigabit LAN"
        io="8x USB Ports / Line In / Line Out"
        wifi="Wi-Fi 802.11 N (AC/AX optional) + BT"
        os="Microsoft Windows Windows 11 & Linus Ubuntu"
        img1={ITX1}
        img2={ITX2}
      />

      <Product2
        name="TI-14YUVA05"
        disp="Notebook/laptop  14.1inch"
        specs1="Support Intel  Gemini lake proccer N4020"
        specs2="PROCCER N4020"
        specs3="In built mic and 2 mp camera"
        specs4="card reader and usb support port"
        color="black metal / golden / grey"
        cpu="Intel Gemini lake N4020"
        memory="4GB"
        storage="128GB SSD"
        interfaces="HDMI / VGA / Gigabit LAN"
        io="1 x DC Jack(12V/2A) 1 x 3.5 mm Aaudio Jack"
        wifi="Wi-Fi 802.11 N (AC/AX optional) + BT 4.0"
        os="Microsoft Windows Windows 11 & 10"
        img1={Laptop1}
        img2={Laptop2}
      />
      <Footer />
    </div>
  )
}

export default ProductPage
