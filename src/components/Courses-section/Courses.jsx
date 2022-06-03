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
      price: 700_000,
      imgUrl: courseImg1,
      subjects: [
         "HTML",
         "CSS",
         "JavaScript",
         "JQuery",
         "Github",
         "Docker",
         "Firebase",
         "AWS server",
         "NextJs",
         "GraphQL",
         "REST API",
         "ReactJs",
         "Redux",
         "MobX",
         "Tailwind CSS",
         "Material UI",
         "TypeScript",
         "Junit",
         "JWT",
      ],
   },

   {
      id: "02",
      title: "Backend (Beginner to MASTER)",
      lesson: 160,
      students: 55,
      rating: 5,
      duration: 8,
      price: 700_000,
      imgUrl: courseImg2,
      subjects: [
         "HTML",
         "CSS",
         "JavaScript Advanced",
         "Github",
         "Docker",
         "GraphQL",
         "REST API",
         "NodeJs",
         "ExpressJs",
         "Firebase",
         "JWT",
         "AWS server",
         "NestJs",
         "MongoDB",
         "Junit",
         "PostgreSQL",
         "TypeScript",
         "Kubernetes",
         "Algorithms",
         "Microservice",
      ],
   },

   {
      id: "03",
      title: "Mobile App (Beginner to MASTER)",
      lesson: 140,
      students: 34,
      rating: 4.7,
      duration: 7,
      price: 700_000,
      imgUrl: courseImg3,
      subjects: [
         "HTML",
         "CSS",
         "JavaScript",
         "Figma",
         "Github",
         "Docker",
         "JWT",
         "React Native",
         "ExpressJs",
         "NodeJs",
         "Firebase",
         "REST API",
         "Redux",
         "Flow",
         "TypeScript",
         "Formik",
      ],
   },
];

const Courses = () => {
   return (
      <section id="courses">
         <Container>
            <Row>
               <Col lg="12" className="mb-5">
                  <div className="course__top d-flex justify-content-between align-items-center">
                     <div className="course__top__left w-50">
                        <h2>TRENDING COURSES</h2>
                        <p>
                           Join latest trending courses in Web Design and
                           Development at Web Development Institute. All the
                           courses help students to learn Design and Development
                           concepts of website!
                        </p>
                     </div>

                     <div className="w-50 text-center">
                        <button onClick={console.log("ss")} className="btn">
                           See All
                        </button>
                     </div>
                  </div>
               </Col>
               <div className="courses__grid">
                  {coursesData.map((item, key) => (
                     <div key={key}>
                        <CourseCard key={item.id} item={item} />
                     </div>
                  ))}
               </div>
            </Row>
         </Container>
      </section>
   );
};

export default Courses;
