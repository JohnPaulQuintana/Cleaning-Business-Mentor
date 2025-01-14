import React from "react";

const Hero = () => {
    return (
        <section className="hero-section position-relative opacity-80" style={{
            backgroundImage: 'url(/assets/cbm/header/1.jpg)', // Replace with your hero image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px', // Adjust the height of the hero section as needed
          }}>
            <div className="container h-100 d-flex flex-column justify-content-center">
              <div className="row align-items-center h-100">
                <div className="col-lg-7 me-auto">
                  <h1 className="ds-3 mt-3 mb-3 text-[#55018A]">Recent Courses</h1>
                  <span className="text-2xl fw-medium text-[#682194]">
                    Explore the insights and trends shaping the cleaning business industry
                  </span>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Hero;