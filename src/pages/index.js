import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import AboutSection from "../components/aboutSection"
import AntiVirusSection from "../components/antivirusSection"
import ProductSection from "../components/productsSection"
import Contactus from "../components/contactUs"
import Footer from "../components/footer"
import Team from "../components/team"


const IndexPage = () => (
<div className=" w-min-screen h-auto bg-[#08152e]">
  <Navbar/>
  <Hero/>
  <AboutSection/>
  <AntiVirusSection/>
  <ProductSection/>
  <Team/>
  <Contactus/>
  <Footer/>
  
</div>

)


export const Head = () => <Seo title="Home" />

export default IndexPage
