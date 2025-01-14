import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="section-footer position-relative pt-10 bg-secondary-1">
        <div className="container position-relative z-1">
          <div className="text-center">
            <a className="d-flex main-logo align-items-center d-inline-flex" href="index.html">
              {/* <img src="assets/imgs/footer-1/logo.svg" alt="zelio" /> */}
              <span className="text-4xl ms-2 text-[#55018A]">Cleaning Business Mentor</span>
            </a>
            <div className="navigation d-none d-md-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
              <a href="#" className="fs-5">Mentorship & Learning</a>
              <a href="#" className="fs-5">Services</a>
              <a href="#" className="fs-5">Resources</a>
              <a href="#" className="fs-5">Training & Events</a>
              <a href="#" className="fs-5">About & Media</a>
            </div>
          </div>
          <div className="row text-center py-4">
            <span className="fs-6">
              © 2025 All Rights Reserved by <span><a href="#" className="text-[#55018A]">Carolyn</a></span>
            </span>
          </div>
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100 z-0" data-background="assets/imgs/footer-1/background.png "></div>
      </div>
    </footer>
  );
};

export default Footer;
