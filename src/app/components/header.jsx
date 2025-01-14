import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const offCanvasRef = useRef();

    // Function to programmatically trigger the offcanvas menu
    const toggleOffCanvas = () => {
        const offCanvasElement = offCanvasRef.current;
        if (offCanvasElement) {
            const bootstrapOffcanvasEvent = new CustomEvent("toggle");
            offCanvasElement.dispatchEvent(bootstrapOffcanvasEvent);
        }
    };

    return (

        // < !--Navbar -- >
        <header>
            <div className="flex items-center justify-center gap-2 py-2 px-8 bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg text-red-500 w-5" fill="currentColor" data-src="https://static.elfsight.com/icons/youtube.svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M12.04 4h.048l.366.002c1.562.008 6.694.063 8.146.418a2.78 2.78 0 0 1 1.94 2 29 29 0 0 1 .46 5.33 29 29 0 0 1-.46 5.25 2.78 2.78 0 0 1-1.94 2c-1.529.409-7.135.454-8.362.46h-.476c-1.227-.006-6.833-.051-8.362-.46a2.78 2.78 0 0 1-1.94-1.92A29 29 0 0 1 1 11.75a29 29 0 0 1 .46-5.29 2.78 2.78 0 0 1 1.94-2c1.452-.388 6.584-.449 8.146-.458L11.912 4h.048ZM9.75 8.48v6.54l5.75-3.27-5.75-3.27Z"></path></svg>
                <p>Dive into our video world on YouTube for exclusive content and insights!</p>
                <span className="font-bold">Subscribe</span>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light w-100 flex-nowrap z-999 pt-0">
                {/* <a 
                    onClick={toggleOffCanvas}
                    href="#" className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex"
                    data-bs-target=".offCanvas__info" aria-controls="offCanvas__info">
                    <i className="ri-menu-2-line"></i>
                </a> */}
                <div className="container py-3 px-0">
                    <a className="navbar-brand d-flex main-logo align-items-center ms-lg-0 ms-md-5 ms-3" href="index.html">
                        {/* <img src="assets/imgs/template/favicon.svg" alt="zelio" /> */}
                        <span className="fs-4 ms-2">Cleaning Business Mentor</span>
                    </a>
                    <div className="d-none d-lg-flex">
                        <div className="main-menu">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item has-children">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item has-children">
                                    <a className="nav-link active" href="#">Mentorship & Learning</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Mentorship Calls</a></li>
                                        <li><a href="#">Mentorship</a></li>
                                        <li><a href="#">Online Courses</a></li>
                                        <li><a href="#">Online Courses + Mentorship</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item has-children">
                                    <a className="nav-link active" href="#">Services</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Web Design Services</a></li>
                                        <li><a href="#">Marketing Material Design</a></li>
                                        <li><a href="#">Residential Bid Calculator</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item has-children">
                                    <a className="nav-link active" href="#">Resources</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Resources</a></li>
                                        <li><a href="#">Zenmaid Boot Camp</a></li>
                                        <li><a href="#">Internal Forms</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item has-children">
                                    <a className="nav-link active" href="#">Training & Events</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">In Person Training</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item has-children">
                                    <a className="nav-link active" href="#">About & Media</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">About Me</a></li>
                                        <li><a href="#">Media & Press</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
                        <div className="d-md-flex d-none gap-3">
                            <a href="#" className="border p-1 px-2 rounded-md bg-[#55018A]">
                                Login
                            </a>
                            {/* <a href="http://twitter.com">
                                <i class="ri-twitter-x-fill fs-18"></i>
                            </a>
                            <a href="http://linkedin.com">
                                <i class="ri-linkedin-fill fs-18"></i>
                            </a>
                            <a href="http://github.com">
                                <i class="ri-github-fill fs-18"></i>
                            </a> */}
                        </div>
                        <div className="burger-icon burger-icon-white border rounded-3">
                            <span className="burger-icon-top"></span>
                            <span className="burger-icon-mid"></span>
                            <span className="burger-icon-bottom"></span>
                        </div>
                    </div>
                </div>
                {/* <div
                    class="dark-light-switcher pe-10 pe-lg-0 pe-0 ps-md-5 ps-0 ps-lg-4 pe-lg-4 d-flex justify-content-center align-items-center icon_80 @@classList">
                    <i class="ri-sun-fill text-warning"></i>
                    <i class="ri-contrast-2-line text-white"></i>
                </div> */}

            </nav>
            {/* <!-- offCanvas-menu --> */}
            <div
                ref={offCanvasRef}
                className="offCanvas__info">
                <div className="offCanvas__close-icon menu-close">
                    <button><i className="ri-close-line"></i></button>
                </div>
                <div className="offCanvas__logo mb-5">
                    <h3 className="mb-0">Get in touch</h3>
                </div>
                <div className="offCanvas__side-info mb-30">
                    <div className="contact-list mb-30">
                        <p className="fs-6 fw-medium text-200 mb-5">I'm always excited to take on new projects and collaborate
                            with innovative minds.</p>
                        <div className="mb-3">
                            <span className="text-400 fs-5">Phone Number</span>
                            <p className="mb-0">+1-234-567-8901</p>
                        </div>
                        <div className="mb-3">
                            <span className="text-400 fs-5">Email</span>
                            <p className="mb-0">contact@william.design</p>
                        </div>
                        <div className="mb-3">
                            <span className="text-400 fs-5">Skype</span>
                            <p className="mb-0">WilliamDesignUX</p>
                        </div>
                        <div className="mb-3">
                            <span className="text-400 fs-5">Address</span>
                            <p className="mb-0">0811 Erdman Prairie Road, Joaville, California 90210</p>
                        </div>
                    </div>

                    <div className="contact-list">
                        <p className="text-400 fs-5 mb-2">Social</p>
                        <div className="d-md-flex d-none gap-3">
                            <a href="http://facebook.com">
                                <i className="ri-facebook-circle-fill fs-18"></i>
                            </a>
                            <a href="http://twitter.com">
                                <i className="ri-twitter-x-fill fs-18"></i>
                            </a>
                            <a href="http://linkedin.com">
                                <i className="ri-linkedin-fill fs-18"></i>
                            </a>
                            <a href="http://github.com">
                                <i className="ri-github-fill fs-18"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offCanvas__overly"></div>
            <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-logo">
                        <a className="d-flex main-logo align-items-center d-inline-flex" href="index.html">
                            <img src="assets/imgs/footer-1/logo.svg" alt="zelio" />
                            <span className="fs-4 ms-2 text-dark">william.design</span>
                        </a>
                        <div className="burger-icon burger-icon-white border rounded-3">
                            <span className="burger-icon-top"></span>
                            <span className="burger-icon-mid"></span>
                            <span className="burger-icon-bottom"></span>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading ps-0">
                                        <li className="nav-item has-children">
                                            <a className="nav-link active" href="#">Mentorship & Learning</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Mentorship Calls</a></li>
                                                <li><a href="#">Mentorship</a></li>
                                                <li><a href="#">Online Courses</a></li>
                                                <li><a href="#">Online Courses + Mentorship</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item has-children">
                                            <a className="nav-link active" href="#">Services</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Web Design Services</a></li>
                                                <li><a href="#">Marketing Material Design</a></li>
                                                <li><a href="#">Residential Bid Calculator</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item has-children">
                                            <a className="nav-link active" href="#">Resources</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Resources</a></li>
                                                <li><a href="#">Zenmaid Boot Camp</a></li>
                                                <li><a href="#">Internal Forms</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item has-children">
                                            <a className="nav-link active" href="#">Training & Events</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">In Person Training</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item has-children">
                                            <a className="nav-link active" href="#">About & Media</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">About Me</a></li>
                                                <li><a href="#">Media & Press</a></li>
                                            </ul>
                                        </li>


                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;