import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import AboutSection from "../components/aboutSection"


const IndexPage = () => (
<div className=" w-min-screen h-auto bg-[#08152e]">
  <Navbar/>
  <Hero/>
  <AboutSection/>

</div>

)


export const Head = () => <Seo title="Home" />

export default IndexPage
