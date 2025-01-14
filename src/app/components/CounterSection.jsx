import React, { useEffect } from 'react';
import 'odometer/themes/odometer-theme-default.css'; // Import the CSS
import Odometer from 'odometer'; // Import odometer

const CounterSection = () => {
  useEffect(() => {
    // Initialize odometer instances on component mount
    const counters = document.querySelectorAll('.odometer');

    counters.forEach(counter => {
      // Initialize odometer on each element
      new Odometer({
        el: counter,
        format: '(,ddd)', // Specify the number format
        duration: 2000, // Animation duration in ms
      }).update(counter.getAttribute('data-count')); // Update the odometer value
    });
  }, []);

  return (
    <div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900 px-20">
      <div className="container">
        <div className="inner">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-auto col-md-6">
              <div className="counter-item-cover counter-item">
                <div className="content text-center mx-auto d-flex align-items-center">
                  <span className="ds-3 count text-[#55018A] fw-medium my-0">
                    +<span className="odometer ds-1 text-dark fw-semibold" data-count="98">98</span>
                  </span>
                  <div className="text-start ms-2">
                    <p className="fs-5 mb-0 text-300">People</p>
                    <p className="fs-5 mb-0 fw-bold">Group Coaching</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-auto col-md-6">
              <div className="counter-item-cover counter-item">
                <div className="content text-center mx-auto d-flex align-items-center">
                  <span className="ds-3 count text-[#55018A] fw-medium my-0">
                    +<span className="odometer ds-1 text-dark fw-semibold" data-count="29">29</span>
                  </span>
                  <div className="text-start ms-2">
                    <p className="fs-5 mb-0 text-300">People</p>
                    <p className="fs-5 mb-0 fw-bold">Private Coaching</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-auto col-md-6">
              <div className="counter-item-cover counter-item">
                <div className="content text-center mx-auto d-flex align-items-center">
                  <span className="ds-3 count text-[#55018A] fw-medium my-0">
                    +<span className="odometer ds-1 text-dark fw-semibold" data-count="581">581</span>
                  </span>
                  <div className="text-start ms-2">
                    <p className="fs-5 mb-0 text-300">People</p>
                    <p className="fs-5 mb-0 fw-bold">Self-Paced Courses</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
