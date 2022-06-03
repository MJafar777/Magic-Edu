import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
   return (
      <section id="about">
         <Container>
            <div className="about__grid">
               <div>
                  <div className="about__img">
                     <img src={aboutImg} alt="" className="w-100" />
                  </div>
               </div>

               <div>
                  <div className="about__content">
                     <h2>About Us</h2>
                     <p>
                        Our global community and our course catalog get better
                        every day. Check out our latest numbers as of May 2022.
                     </p>

                     <div className="about__counter">
                        <div className=" d-flex gap-5 align-items-center">
                           <div className="single__counter">
                              <span className="counter">
                                 <CountUp
                                    start={0}
                                    end={100}
                                    duration={2}
                                    suffix="+"
                                 />
                              </span>

                              <p className="counter__title">
                                 Completed Projects
                              </p>
                           </div>

                           <div className="single__counter">
                              <span className="counter">
                                 <CountUp
                                    start={0}
                                    end={50}
                                    duration={2}
                                    suffix="+"
                                 />
                              </span>
                              <p className="counter__title">
                                 Employeers Around The World
                              </p>
                           </div>
                        </div>

                        <div className=" d-flex gap-5 align-items-center">
                           <div className="single__counter">
                              <span className="counter">
                                 <CountUp
                                    start={0}
                                    end={300}
                                    duration={2}
                                    suffix="+"
                                 />
                              </span>

                              <p className="counter__title">Students</p>
                           </div>

                           <div className="single__counter">
                              <span className="counter">
                                 <CountUp
                                    start={0}
                                    end={2}
                                    duration={2}
                                    suffix=""
                                 />
                              </span>

                              <p className="counter__title">
                                 Offices Around The World
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default AboutUs;
