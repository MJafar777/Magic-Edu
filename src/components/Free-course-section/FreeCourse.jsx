import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";

import courseImg5 from "../../assests/images/web-design.png";
import courseImg6 from "../../assests/images/graphics-design.png";
import courseImg7 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "05",
    title: "Frontend",
    lesson: 140,
    students: 40,
    rating: 4.9,
    duration: 7,
    imgUrl: courseImg5,
  },

  {
    id: "06",
    title: "Backend",
    lesson: 160,
    students: 55,
    rating: 5,
    duration: 8,
    imgUrl: courseImg6,
  },

  {
    id: "07",
    title: "Mobile App",
    lesson: 140,
    students: 34,
    rating: 4.7,
    duration: 7,
    imgUrl: courseImg7,
  },
  {
    id: "01",
    title: "Algorithms and Data Structures (C++)",
    imgUrl: courseImg01,
    students: 25,
    rating: 5,
  },
  {
    id: "02",
    title: "Coding for Kids",
    imgUrl: courseImg02,
    students: 20,
    rating: 4.9,
  },

  {
    id: "03",
    title: "Database Expert",
    imgUrl: courseImg03,
    students: 20,
    rating: 4.8,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 30,
    rating: 5,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">All Courses</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
