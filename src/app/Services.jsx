import React from "react";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import CounterSection from "./components/CounterSection";
import ServiceSection from "./components/ServiceSection";
import Testimonials from "./components/Testimonial";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Services/Hero";
import ProjectSection from "./components/Services/ProjectSection";
import { useLocation } from "react-router-dom";
import { self_paced } from "./data/self_paced";
import { mentorship } from "./data/mentorship";
import { design } from "./data/design";
const Services = () => {
    const location = useLocation();
  
  // Extract query parameters
    const queryParams = new URLSearchParams(location.search);
    
    const param = queryParams.get('filter'); // Get 'name' from the query string
    // console.log(param);
    let data = [];
    if (param === "self_paced") {
        data = self_paced;
        console.log(data)
    }else if(param === "mentorship"){
        data = mentorship;
    }else if(param === "design"){
        data = design;
    }
    return (
        <div>
            {/* <!--Preloader--> */}
            {/* <div id="preloader">
                <div class="loader-cover">
                    <div class="loader-container">
                        <div class="loader-icon"></div>
                    </div>
                </div>
            </div> */}
            {/* <!--Preloader-end --> */}

            {/* header */}
            <Header />

            {/* <Hero /> */}
            <ProjectSection sectionData={data}/>
            {/* hero */}
            {/* <HeroSection /> */}
            {/* Counter */}
            {/* <CounterSection />
            <ServiceSection /> */}
            {/* <Testimonials /> */}
            {/* <ContactSection /> */}
            <Footer />
        </div>
    );
}

export default Services;