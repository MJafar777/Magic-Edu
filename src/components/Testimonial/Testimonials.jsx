import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Teachers are very good and very understanding of other
                        issues also. Never faced a problem to deal with them. I
                        very much recommend this company.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jonibek Munirov</h6>
                        <p>TUIT student</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Practical knowledge is impressive
                      </h6>
                      <p>
                        Best education coaching center, the staff here are very
                        polite, understanding and have a kind nature. Best Web
                        Development course to get practical knowledge of web
                        development and web design.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jamshid Kalandarov</h6>
                        <p>TSUE student </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">Teachers is expert</h6>
                      <p>
                        Being a developer I was always looking for a course,
                        which can provide practical knowledge in Web development
                        and I believe MagicSoft Which is part of Backend has
                        satisfied all my expectations.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Doston Mardonov</h6>
                        <p>TAQI student</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
