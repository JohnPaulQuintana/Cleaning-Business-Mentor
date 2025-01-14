import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const services = [
        {
            number: "01",
            title: "Self Paced Cleaning Courses",
            sub_title: "Build a thriving cleaning business with Carolyn Arellano’s expertise.",
            description: "Discover the art of setting up a successful residential and/or commercial cleaning business with Carolyn Arellano's meticulously crafted courses. Our courses are designed to equip you with the necessary skills and knowledge to establish a thriving cleaning business. With Carolyn's extensive experience and expertise, you'll gain valuable insights into the industry's nuances and learn proven strategies to achieve success. Join our program today and learn how to establish a solid foundation for your cleaning business, set realistic goals, develop marketing strategies, and manage your finances.",
            img: "assets/cbm/images/7.png",
            param: "self_paced"
        },
        {
            number: "02",
            title: "Self Paced Course + Mentorship Support",
            sub_title: "Unlock your business potential with 1:1 mentorship from Carolyn Arellano.",
            description: "We are thrilled to offer you a self paced online course with exclusive 1:1 Mentorship Support with Carolyn Arellano, a seasoned industry expert. Throughout the course, you'll have the opportunity to benefit from Carolyn's wealth of experience and guidance. For 8-10 weeks, you'll enjoy weekly 30-minute one-on-one mentoring calls, where Carolyn will personally address your queries, provide tailored advice, and help you overcome challenges specific to your business.",
            img: "assets/cbm/images/3.png",
            param: "mentorship"
        },
        {
            number: "03",
            title: "Marketing Material Design",
            sub_title: "Build a strong brand for your cleaning business with our custom design services.",
            description: "We offer a range of design services to help promote and grow your cleaning business, including logo design, business cards, flyers, pamphlets, and more. Our team of experienced designers will work with you to create eye-catching and professional marketing materials that reflect your brand and message. Let us help you create a strong and memorable brand that will attract more customers to your cleaning business.",
            img: "assets/cbm/images/4.png",
            param: "design"
        },
        {
            number: "04",
            title: "Web Design Services",
            sub_title: "Create a stunning website for your cleaning business with our expert design services.",
            description: "Welcome to our web design services for cleaning businesses! We understand the importance of having a professional and user-friendly website that showcases your cleaning services and attracts potential customers. Our team of experienced designers will work with you to create a custom website that reflects your brand and meets your specific needs. We'll ensure that your website is optimized for search engines, making it easier for people to find you online.",
            img: "assets/cbm/images/2.png",
            param: "web_design"
        },
        {
            number: "05",
            title: "Residential Bid Calculator",
            sub_title: "Get accurate bid estimates for residential cleaning with our easy estimator.",
            description: "Our calculator is designed to assist you in determining accurate and competitive bids for residential cleaning services. By using a set hourly rate and considering the effort of work involved, our calculator totals the components within varying services to provide you with comprehensive and detailed estimates.",
            img: "assets/cbm/images/6.png",
            param: "calculator"
        },
        {
            number: "06",
            title: "Internal Forms for Your Cleaning Business",
            sub_title: "Streamline operations with our cleaning business forms.",
            description: "Our comprehensive collection of internal forms is tailored to meet the specific needs of your residential and commercial cleaning business. From essential cleaning checklists to employee onboarding paperwork, quotation templates, and proposal templates, our forms cover every aspect of your business's operations. Our forms are meticulously designed to streamline your business processes, increase efficiency, and ensure compliance with industry regulations. With our comprehensive collection of internal forms, you can be confident that your cleaning business will operate smoothly and efficiently.",
            img: "assets/cbm/images/5.png",
            param: "forms"
        },
        {
            number: "07",
            title: "In Person Training",
            sub_title: "Join Spotless Team for a hands-on commercial & residential cleaning experience!",
            description: "We cordially invite you to join us for an exclusive day with the Spotless Team, during which we will showcase our unparalleled expertise by conducting two to three commercial/ residential cleaning projects in various commercial/ residential locations. This exceptional opportunity will provide you with a firsthand demonstration of proper janitorial/ residential cleaning techniques, enabling you to acquire valuable knowledge and insight to launch your own commercial / residential cleaning enterprise with confidence. By the end of this experience, you will have gained the necessary skills and expertise to achieve success in the highly competitive commercial cleaning industry.",
            img: "assets/cbm/images/13.png",
            param: "training"
        },
        {
            number: "08",
            title: "Commercial Leads",
            sub_title: "Book your free consultation for customized commercial cleaning walkthroughs!",
            description: "I work closely with a sales team dedicated to helping you secure multiple commercial cleaning walkthroughs tailored to your business needs. Schedule your free consultation today!",
            img: "assets/cbm/images/12.png",
            param: "leads"
        },
        {
            number: "09",
            title: "1: 1 Mentoring Calls",
            sub_title: "Schedule a 1:1 mentoring call with Carolyn Arellano to grow your cleaning business!",
            description: "We invite you to schedule a personalized mentoring call with Carolyn Arellano, where you can glean valuable insights on a range of topics related to cleaning and business. This 1:1 session is an excellent opportunity to tap into Carolyn's extensive knowledge and expertise and gain valuable insights and strategies to help grow your cleaning business. Don't hesitate to take advantage of this exclusive opportunity to engage with a seasoned professional and learn from her wealth of experience.",
            img: "assets/cbm/images/8.png",
            param: "mentoring"
        },
        {
            number: "10",
            title: "Virtual Assistants",
            sub_title: "Never miss a call – Let our virtual assistants handle your bookings and boost earnings!",
            description: "Struggling to catch every call and maximize your earnings? In the realm of client bookings for cleaning services, seizing the moment is crucial. Our specialized virtual assistants are finely tuned to the cleaning industry, primed to tackle all your administrative obligations. No more missed opportunities or revenue left behind.",
            img: "assets/cbm/images/10.png",
            param: "virtual_assistants"
        },
    ];
    

    const handleCardClick = (index, e) => {
        e.preventDefault(); // Prevent the page from scrolling to the top
        if (expandedIndex === index) {
            setExpandedIndex(null); // Collapse if the same card is clicked
        } else {
            setExpandedIndex(index); // Expand the clicked card
        }
    };

    return (
        <section className="section-service-1 pt-120 pb-120">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-7 me-auto">
                        <h3 className="ds-3 mt-3 mb-3 text-[#55018A]">What do I offer?</h3>
                        <span className="fs-5 fw-medium text-200">
                            My journey started with a fascination for design and technology,
                            <br />
                            leading me to specialize in UI/UX design
                        </span>
                    </div>
                    <div className="col-lg-auto">
                        <a href="#" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
                            Consult Now
                            <i className="ri-arrow-right-up-line"></i>
                        </a>
                    </div>
                </div>
                <div className="row mt-6 justify-content-between">
                    {services.map((service, index) => (
                        <div key={index} className="col-12">
                            <div
                                className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3"
                                onClick={(e) => handleCardClick(index, e)}
                                style={{
                                    maxHeight: expandedIndex === index ? '500px' : '125px', // Adjust height based on expanded state
                                    transition: 'max-height 0.5s ease-in-out', // Smooth height transition
                                    overflow: 'hidden', // Prevent content from overflowing
                                    backgroundColor: expandedIndex === index ? '#55018A' : '', // Change background color based on expanded state
                                    // color: expandedIndex === index ? 'white' : 'white', // Change text color based on expanded state
                                }}

                            >
                                <div className="service-card-details d-lg-flex align-items-center">
                                    <h4 className="service-card-title w-lg-50 w-100 mb-0">
                                        <a href="#" className='text-3xl'>
                                            {/* <span className="service-number">{service.number}.</span> */}
                                            {service.title}
                                        </a>
                                    </h4>
                                    <a
                                        href="#"
                                        className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100"
                                    >
                                        <div>
                                            <p className="service-card-text my-3 text-2xl">{service.sub_title}</p>

                                        </div>
                                        <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </div>
                                    </a>

                                </div>
                                <div className='flex gap-4 mt-8'>
                                    <img src={service.img} alt="" className="w-64 rounded-md" />
                                    <div>
                                        <p className='text-xl tracking-wide text-white'>{service.description}</p>
                                        <Link to={`/services/?filter=${service.param}`} className="btn btn-outline-secondary d-inline-flex align-items-center">
                                            View more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
