import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Frontend (Beginner to MASTER)",
    lesson: 140,
    students: 40,
    rating: 4.9,
    duration: 7,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Backend (Beginner to MASTER)",
    lesson: 160,
    students: 55,
    rating: 5,
    duration: 8,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Mobile App (Beginner to MASTER)",
    lesson: 140,
    students: 34,
    rating: 4.7,
    duration: 7,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>TRENDING COURSES</h2>
                <p>
                  Join latest trending courses in Web Design and Development at
                  Web Development Institute. All the courses help students to
                  learn Design and Development concepts of website!
                </p>
              </div>

              <div className="w-50 text-end">
                <button onClick={console.log("ss")} className="btn">
                  See All
                </button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
