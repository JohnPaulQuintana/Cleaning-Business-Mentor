import React from 'react';

const ProjectSection = ({ sectionData }) => {
  return (

    <div className=''>
      <section className="hero-section position-relative" style={{
        backgroundImage: 'url(/assets/cbm/header/1.jpg)', // Replace with your hero image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // Adjust the height of the hero section as needed
      }}>
        <div className="overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay (adjust the opacity as needed)
          zIndex: 1,
        }}>
          <div className="container h-100 d-flex flex-column justify-content-center px-20">
            <div className="row align-items-center h-100">
              <div className="col-lg-7 me-auto">
                <h1 className="ds-3 mt-3 mb-3 text-white">{sectionData[0].header}</h1>
                <span className="text-2xl fw-medium text-white">
                  Explore the insights and trends shaping the cleaning business industry
                </span>
              </div>
            </div>
          </div>

        </div>

      </section>
      <div className="container mt-8 px-20">
        <div className="row">

          {sectionData.map((course, index) => (
            <div className="col-lg-4" key={index}>
              <div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3 bg-gray-200 p-4">
                <div className="blog-card__image position-relative">
                  <div className="zoom-img rounded-3 overflow-hidden">
                    <img className="w-100" src={course.image} alt={course.title} />
                    <a
                      className="position-absolute bottom-0 start-0 m-3 text-white btn btn-gradient fw-medium rounded-3 px-3 py-2"
                      href="#"
                    >
                      {course.lesson}
                    </a>
                    <a
                      href="#"
                      className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle"
                    >
                      <i className="ri-arrow-right-up-line text-white"></i>
                    </a>
                  </div>
                </div>
                <div className="blog-card__content position-relative text-center mt-4">
                  <span className="blog-card__date text-2xl text-[#55018A]">{course.price}</span>
                  <h5 className="blog-card__title text-2xl font-bold tracking-wide">{course.title}</h5>
                  <p className="blog-card__description fs-6">{course.description}</p>
                  <a
                    href="#"
                    className="link-overlay position-absolute top-0 start-0 w-100 h-100"
                  ></a>
                  <button
                    type="button"
                    className="bg-[#55018A] p-2 rounded-md text-white mt-2 flex items-center gap-1 justify-center transform transition-all duration-300 hover:scale-110"
                  >
                    Buy Now
                    <i className="ri-arrow-right-line"></i>
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
