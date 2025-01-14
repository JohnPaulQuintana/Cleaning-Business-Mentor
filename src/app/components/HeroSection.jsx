import React from "react";

const HeroSection = () => {
  return (
    <section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
      <div className="container position-relative z-3">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <span className="text-dark">👋 Hi there, I'm Carolyn</span>
            <h1 className="ds-2 mb-3">
              Cleaning Business <span className="text-[#55018A]"> Mentor</span>
            </h1>
            <p className="text-300 mb-6">
              Founder and CEO of Spotless Cleaning Services, Arellano Services, and Cleaning Business Mentor. This page is packed with products and services tailored for growing cleaning business owners. With years of experience running my own cleaning business and mentoring others worldwide, I understand the challenges you face!
            </p>
            <div>
            <a href="assets/resume.pdf" className="btn btn-gradient me-2 pop-btn" target="_blank" rel="noopener noreferrer">
              Free 10-Minutes Consultation
              <i className="ri-arrow-right-line ms-2"></i>
            </a>

              {/* <a href="#contact" className="btn btn-outline-secondary d-inline-flex align-items-center">
                <span>Hire me</span>
                <i className="ri-arrow-right-line ms-2"></i>
              </a> */}
            </div>
            {/* <p className="text-400 mt-6 mb-3">+ 12 years with professional design software</p>
            <div className="d-flex gap-3">
              {[
                "brand-1.png",
                "brand-2.png",
                "brand-3.png",
                "brand-4.png",
                "brand-5.png",
                "brand-6.png",
              ].map((brand, index) => (
                <div
                  key={index}
                  className={`brand-logo icon-xl icon-shape rounded-3 bg-900 ${
                    index === 5 ? "d-none d-md-flex" : ""
                  }`}
                >
                  <img src={`assets/imgs/hero/hero-1/${brand}`} alt={`brand-${index + 1}`} />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
        <img className="position-relative z-1 filter-gray w-[80%]" src="assets/cbm/PNG/1.png" alt="carolyn" />
        <div className="position-absolute top-20 start-36 translate-middle z-0 mt-5">
          <img className="ribbonRotate w" src="assets/imgs/testimonials/testimonials-1/decorate.png" alt="zelio" />
        </div>
        {/* <div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
          <img className="ribbonRotate" src="assets/imgs/hero/hero-1/decorate.png" alt="zelio" />
        </div> */}
      </div>
      <div
        className="position-absolute top-0 start-0 w-100 h-100 filter-invert"
        style={{ backgroundImage: "url('assets/imgs/hero/hero-1/background.png')" }}
      ></div>
    </section>
  );
};

export default HeroSection;
