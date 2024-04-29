import React  from "react";
import Navbar from '../components/navbar';
import AntivirusHero from "../components/antivirushero";
import FeatureSection from "../components/feature";
import AntiVirusSection from "../components/antivirusSection";
import Footer from "../components/footer";


function Antiviruspage(){
    return(
        <div className=" w-min-screen h-auto bg-[#08152e]">
            <Navbar/>
            <AntivirusHero/>
            <FeatureSection/>
            <AntiVirusSection/>
            <Footer/>

        </div>

    )
}

export default Antiviruspage;