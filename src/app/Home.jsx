import React from "react";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import CounterSection from "./components/CounterSection";
import ServiceSection from "./components/ServiceSection";
import Testimonials from "./components/Testimonial";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const Home = () => {
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

            {/* hero */}
            <HeroSection />
            {/* Counter */}
            <CounterSection />
            <ServiceSection />
            <Testimonials />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default Home;