import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/web1.jpg";
import "./hero-section.css";

const HeroSection = () => {
   return (
      <section className="hero">
         <Container>
            <div className="hero__grid">
               <div>
                  <h2 className="mb-4 hero__title">
                     Learn something new every day from the Senior Level
                     Teachers
                  </h2>
                  <div className="hero__content">
                     <p className="mb-5">
                        Start, switch, or advance your career with less than in
                        6 months, Professional Certificates, and degrees from
                        world-class Senior Level Teachers and Companies.
                        MagicSoft helps software engineers and their teams
                        increase productivity and reach their potential!
                     </p>
                  </div>
                  <div className="search">
                     <input type="text" placeholder="Search" />
                     <button className="btn">Search</button>
                     <i className="ri-search-line"></i>
                  </div>
               </div>

               <div>
                  <img
                     // style={{ width: "80%", height: "26rem" }}
                     src={heroImg}
                     alt=""
                     className="hero__img"
                  />
               </div>
            </div>
         </Container>
      </section>
   );
};

export default HeroSection;
