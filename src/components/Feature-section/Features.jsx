import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Our Classroom training process makes students professional web designer. In classroom training our faculty helps students to develop skills in jpg to html covert, color theory, typography,web template design etc.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Join MagicSoft Group to enhance web design and development concepts in fastrack mode. Our fastrack training are based on latest learning approach. All courses available with us in fastrack give a complete knowledge of layout, typography, color, design principles etc.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Now a Days, Almost all the peoples are busy and don’t have much more amount to spend or even some peoples no interested to attend class in group or walk. But today’s internet age, lots of institutes offers web design diploma and certificates courses online.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
