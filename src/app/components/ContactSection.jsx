import React from 'react';

const ContactSection = () => {
  const icons = [
    { name: "YouTube", iconClass: "ri-youtube-fill", link: "#" },
    { name: "Facebook", iconClass: "ri-facebook-fill", link: "#" },
    { name: "Instagram", iconClass: "ri-instagram-fill", link: "#" },
    { name: "Twitter", iconClass: "ri-twitter-fill", link: "#" },
  ];

  return (
    <section id="contact" className="section-contact-1 position-relative pb-lg-250 pb-150 overflow-hidden px-20">
      <div className="container position-relative z-1">
        <h3 className="ds-3 mt-3 mb-3 text-[#55018A]">Get in touch</h3>
        <span className="fs-5 fw-medium text-200">
          I'm always excited to take on new projects and collaborate with innovative minds. If you
          <br />
          have a project in mind or just want to chat about design, feel free to reach out!
        </span>
        <div className="row mt-8">

          <div className="col-lg-4 grid">
            {/* <img src="assets/cbm/PNG/4.png" className='w-full h-[80%]' alt="" /> */}
            {/* <div className="position-absolute -bottom-36 start-72 translate-middle z-0 mt-5">
                <img className="ribbonRotate w-[50%]" src="assets/imgs/testimonials/testimonials-1/decorate.png" alt="zelio" />
            </div> */}
            {icons.map((icon, index) => (
              <div
                className="d-flex align-items-center mb-4 position-relative d-inline-flex"
                key={index}
              >
                <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                  <i className={`${icon.iconClass} text-primary fs-26`}></i>
                </div>
                <div className="ps-3">
                  <span className="text-400 fs-5">{icon.name}</span>
                </div>
                <a href={icon.link} className="position-absolute top-0 start-0 w-100 h-100"></a>
              </div>
            ))}
          </div>

          <div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
            <div className="position-relative">
              <div className="position-relative z-2">
                <h3 className='text-4xl font-bold tracking-wide text-[#55018A]'>Leave a message</h3>
                <form action="#">
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="mb-1 mt-3 text-dark" htmlFor="name">
                        Your name <span className="text-primary">*</span>
                      </label>
                      <input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="John Doe" aria-label="username" />
                    </div>
                    <div className="col-md-6">
                      <label className="mb-1 mt-3 text-dark" htmlFor="email">
                        Email address <span className="text-primary">*</span>
                      </label>
                      <input type="text" className="form-control border rounded-3" id="email" name="email" placeholder="contact.john@gmail.com" aria-label="email" />
                    </div>
                    <div className="col-md-6">
                      <label className="mb-1 mt-3 text-dark" htmlFor="phone">
                        Your phone <span className="text-primary">*</span>
                      </label>
                      <input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="+01 234 567 89" aria-label="phone" />
                    </div>
                    <div className="col-md-6">
                      <label className="mb-1 mt-3 text-dark" htmlFor="subject">
                        Subject <span className="text-primary">*</span>
                      </label>
                      <input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for...." aria-label="subject" />
                    </div>
                    <div className="col-12">
                      <label className="mb-1 mt-3 text-dark" htmlFor="message">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="Your message here...." aria-label="With textarea"></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-gradient mt-3">
                        Send Message
                        <i className="ri-arrow-right-up-line"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
        <div className="wow img-custom-anim-top">
          <h3 className="stroke fs-120 text-uppercase text-900 mb-0 lh-1">CLEANING BUSINESS MENTOR</h3>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
