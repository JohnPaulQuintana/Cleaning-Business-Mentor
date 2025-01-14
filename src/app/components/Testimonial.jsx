import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Correct CSS import for Swiper
import 'swiper/css/pagination'; // Optional pagination styles

const testimonials = [
    {
        logo: 'assets/imgs/testimonials/testimonials-1/logo-1.png',
        avatar: 'assets/imgs/testimonials/testimonials-1/avatar-1.png',
        name: 'Stephen J.',
        position: 'Clear Thought Cleaning',
        quote: '“As a business owner, the journey can often feel like a solitary endeavor, and the quest for valuable guidance is crucial. In this pursuit, I had the pleasure of receiving guidance from Carolyn Arellano, and the impact on my company has been nothing short of remarkable.”',
    },
    {
        logo: 'assets/imgs/testimonials/testimonials-1/logo-2.png',
        avatar: 'assets/imgs/testimonials/testimonials-1/avatar-2.png',
        name: 'Clifton M.',
        position: 'Clifton Cleaning',
        quote: '“I have purchased many courses in the past, but never have I experienced someone going into great depth on a topic as you did. You covered everything from residential cleaning, commercial cleaning, hiring, customer service, contracts, business structure, and advertising. I received a wealth of knowledge in the industry. I put my business on hold because I discovered my system was flawed. I will make the adjustments, based on what I learned in the course.Thank you for sharing so much and not holding anything back in the course.”',
    },
    {
        logo: 'assets/imgs/testimonials/testimonials-1/logo-1.png',
        avatar: 'assets/imgs/testimonials/testimonials-1/avatar-1.png',
        name: 'Akeene A.',
        position: 'Spot It Cleaning Services',
        quote: '“Carolyn was a huge help and gave me great advice! She helped me gain more clarity on my goals for my cleaning company! Will definitely book another call in future!”',
    },
];

const Testimonials = () => {
    return (
        <section className="section-testimonials-1 position-relative pt-120 pb-120 bg-900 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 className="ds-3 mt-3 mb-3 text-[#55018A]">Client's Testimonials</h3>
                        <span className="fs-5 fw-medium text-200">
                            I believe that working hard and trying to learn every day will make me
                            <br />
                            improve in satisfying my customers.
                        </span>
                        <div className="row mt-8">
                            <div className="swiper slider-2 pt-2 pb-3">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    autoplay={{
                                        delay: 3000, // time in ms between each slide
                                        disableOnInteraction: false, // keeps autoplay running after interaction
                                    }}
                                    className="swiper-wrapper"
                                >
                                    {testimonials.map((testimonial, index) => (
                                        <SwiperSlide key={index} className="swiper-slide">
                                            <div className="bg-white card-testimonial-1 p-lg-7 p-md-5 mx-3 mx-md-0 p-4 border-2 rounded-4 position-relative">
                                                <div className="mb-6 logo">
                                                    <img src={testimonial.logo} alt="logo" />
                                                </div>
                                                <div className="d-flex mb-5">
                                                    <i className="ri-star-fill fs-7 text-primary"></i>
                                                    <i className="ri-star-fill fs-7 text-primary"></i>
                                                    <i className="ri-star-fill fs-7 text-primary"></i>
                                                    <i className="ri-star-fill fs-7 text-primary"></i>
                                                    <i className="ri-star-fill fs-7 text-500"></i>
                                                </div>
                                                <h6 className="mb-7">{testimonial.quote}</h6>
                                                <a href="#!" className="d-flex align-items-center">
                                                    <img className="icon_65 avatar" src={testimonial.avatar} alt="avatar" />
                                                    <h6 className="ms-2 mb-0">
                                                        {testimonial.name} <span className="fs-6 fw-regular"> - {testimonial.position}</span>
                                                    </h6>
                                                </a>
                                                <div className="position-absolute top-0 end-0 m-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                                        <g clipPath="url(#clip0_551_13914)">
                                                            <path
                                                                d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                                                                fill="#D1D5DB"
                                                            />
                                                            <path
                                                                d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                                                                fill="#D1D5DB"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width="52" height="52" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 ps-10 d-none d-md-block">
                <img className="position-relative z-1" src="assets/cbm/PNG/2.png" alt="man" />
                <div className="position-absolute top-50 start-50 translate-middle z-0 mt-5">
                    <img className="ribbonRotate" src="assets/imgs/testimonials/testimonials-1/decorate.png" alt="zelio" />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
